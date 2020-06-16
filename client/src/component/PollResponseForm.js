import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Paper } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'


const useStyles = theme => ({
});

class PollResponseForm extends React.Component {
    constructor(props) {
        super(props)
        this.setLocation = props.setLocationCallback
        this.state = {
            pollId: props.pollId,
            questions: [],
            fields: [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.populateFields()
    }

    handleChange(i, event) {
        let fields = [...this.state.fields]
        fields[i] = event.target.value
        this.setState({ fields })
    }

    populateFields() {
        // Called at construction time to populate `this.state.questions` with
        // the poll questions associated with the poll at this.state.pollId.
        // TODO: Finish implementation such that the api is correctly called.
        let questions = []
        axios.get('http://localhost:5000/polls/'+this.state.pollId).then(res => {
            questions.push(res.data)
        }).catch(err => console.log(err))
        console.log("populating fields")
        console.log(questions)
    }

    render() {
        return <div>pollResponseForm</div>
    }
}

export default PollResponseForm