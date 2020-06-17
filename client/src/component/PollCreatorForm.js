import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Paper } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import axios from 'axios'


const useStyles = theme => ({
    fab: {
      position: 'fixed',
    },
    root: {
        minHeight: "50vh",
        paddingLeft: 5,
    },
      });

function PollAnswer(props) {
    return (
        <div style={{ paddingBottom: 10 }}>
        <TextField key={props.label} label={props.label} value={props.value} variant="standard" onChange={props.handleChange} />
        </div>
    )
}

class PollCreatorForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            answerCount: 1,
            fields: [],
            isFormValid: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    resetForm() {
        this.setState({
            answerCount: 1,
            fields: ['', ''],
            isFormValid: false,
        }) 
    }

    handleChange(i, event) {
        let fields = [...this.state.fields]
        fields[i] = event.target.value
        let areFieldsValid = fields.map(field => field.length < 280)
        this.setState({
            fields: fields,
            isFormValid: areFieldsValid.reduce((a, b) => a && b),
            areFieldsValid: areFieldsValid,
        })
        if (i === this.state.answerCount) {
            this.setState({
                answerCount: i+1
            })
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        if (!this.state.isFormValid) {
            console.log("invalid")
            return false
        }
        const submission = [...this.state.fields]
        const question = submission[0]
        const answers = submission.slice(1,submission.length).map(answer => ({body: answer}))
        const payload = {
            question: question,
            answers: answers
        }
        axios.post('http://localhost:5000/polls/add', payload).then(res => console.log(res.data))
        this.resetForm() 
    }

    render() {
        var answers = [];
        console.log(this.state.fields)
        for (let i = 1; i < this.state.answerCount+1; i++) {
            answers.push((
            <PollAnswer key={i} label={"Option "+(i)} value={this.state.fields[i]} handleChange={this.handleChange.bind(this, i)} />
            ))
        } 
        return (
            <Paper>
                <ExpansionPanel >
                    <ExpansionPanelSummary>
                    <h2>Create your own poll</h2>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <form onSubmit={this.handleSubmit}>
                    <PollAnswer label="Title" value={this.state.fields[0]} handleChange={this.handleChange.bind(this, 0)} />
                    {answers}
                    <Button variant="contained" color="primary" type="submit" onSubmit={this.handleSubmit}>Submit Poll</Button>
                    </form>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Paper>
        )
    }
}

export default withStyles(useStyles)(PollCreatorForm);