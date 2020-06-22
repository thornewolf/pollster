import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Paper, Card, CardContent, FormControl, RadioGroup, FormControlLabel, Radio, Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'

import './PollResponseForm.css'
import { Link } from 'react-router-dom';

class PollResponseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pollId: props.pollId,
            poll: {},
            answer: "",
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {        
        this.setState({ answer: event.target.value })
        console.log("handling change")
        console.log(event.target.value)
    }

    handleSubmit(event) {
        event.preventDefault();
        // TODO(n-wes) implement routes to handle responding to a poll.
        console.log("handling submit")
        console.log(event)
        this.setLocationCallback("home")
    }
    
    componentDidMount() {
        this.populateFields()
    }

    populateFields() {
        var poll = {}
        axios.get(`http://localhost:5000/polls/${this.props.match.params.id}`)
        .then(res => {
            poll = res.data
            this.setState({
                poll: poll,
                answer: poll.answers[0]._id
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        const poll = this.state.poll
        let answers = poll.answers
        if (typeof(answers) === "undefined") {
            return <div></div>
        }
        return (
            <div className="root">
                <Paper className="form">
                    <form className="formBody" onSubmit={this.handleSubmit} >
                        <h1>{poll.question}</h1>
                        <FormControl required>
                            <RadioGroup onChange={this.handleChange} required>
                                {poll.answers.map((ans)=>(
                                <FormControlLabel key={ans._id} value={ans._id} control={<Radio required />} label={ans.body} />
                                ))}
                            </RadioGroup>
                            <Grid container alignItems="stretch">
                                    <Grid item>
                                        <Button color="primary" variant="contained" type="submit" onSubmit={this.handleSubmit}>Submit Response</Button>
                                    </Grid>
                                    <Grid item>
                                        <Link exact to={`../results/${this.props.match.params.id}`}>
                                            <Button color="default" variant="contained">View Results</Button>
                                        </Link>
                                    </Grid>
                            </Grid>
                        </FormControl>
                    </form>
                </Paper>
            </div>
        )
    }
}

export default PollResponseForm