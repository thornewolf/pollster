import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper } from '@material-ui/core'
import { Typography, CardContent } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = theme => ({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    root: {
        minHeight: "50vh",
        paddingLeft: 5,
    },
      });

function PollQuestion(props) {
    const classes = makeStyles(useStyles)
    return (
        <div style={{ paddingBottom: 10 }}>
        <TextField key={props.label} label={props.label} variant="standard" onChange={props.handleChange} />
        </div>
    )
}

class PollCreatorForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            questionCount: 3,
            fields: [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(i, event) {
        let fields = [...this.state.fields]
        fields[i] = event.target.value
        this.setState({
            fields
        })
        if (i === this.state.questionCount) {
            this.setState({
                questionCount: i+1
            })
        }
    }

    handleSubmit(event) {
        const {name, value} = event.target
        alert(this.state.fields)
    }

    render() {
        const { classes } = this.props;
        var questions = [];
        for (let i = 1; i < this.state.questionCount+1; i++) {
            questions.push((
            <PollQuestion key={i} label={"Option "+(i)} handleChange={this.handleChange.bind(this, i)} />
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
                    <PollQuestion label="Title" handleChange={this.handleChange.bind(this, 0)} />
                    {questions}
                    <Button variant="contained" color="primary" type="submit" onSubmit={this.handleSubmit}>Submit Poll</Button>
                    </form>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Paper>
            
        )
    }
}

export default withStyles(useStyles)(PollCreatorForm);