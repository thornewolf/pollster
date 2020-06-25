import React, { useState } from 'react';
import { Paper, Card, CardContent, FormControl, RadioGroup, FormControlLabel, Radio, Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import axios from 'axios'

import './PollResponseForm.css'
import { Link } from 'react-router-dom';


const PollResponseForm = props => {
    const pollId = props.pollId
    const poll = axios.get(`http://localhost:5000/polls/${props.match.params.id}`)
                    .then(res => res.data)
    const [answer, setAnswer] = useState() 
    const handleSubmit = () => {}
    const handleChange = () => {}

    return (
        <div className="root">
            <Paper className="form">
                <form className="formBody" onSubmit={handleSubmit} >
                    <h1>{poll.question}</h1>
                    <FormControl required>
                        <RadioGroup onChange={handleChange} required>
                            {poll.answers && poll.answers.map((ans)=>(
                            <FormControlLabel key={ans._id} value={ans._id} control={<Radio required />} label={ans.body} />
                            ))}
                        </RadioGroup>
                        <Grid container alignItems="stretch">
                                <Grid item>
                                    <Button color="primary" variant="contained" type="submit" onSubmit={handleSubmit}>Submit Response</Button>
                                </Grid>
                                <Grid item>
                                    <Link exact to={`../results/${props.match.params.id}`}>
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

// class PollResponseForm extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             pollId: props.pollId,
//             poll: {},
//             answer: "",
//         }

//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleChange(event) {        
//         this.setState({ answer: event.target.value })
//     }

//     handleSubmit(event) {
//         event.preventDefault();
//         axios.patch(`http://localhost:5000/polls/${this.props.match.params.id}`, {
//             "answer_id": this.state.answer
//         })
//             .catch(err => {console.log(err)})
//     }
    
//     componentDidMount() {
//         this.populateFields()
//     }

//     populateFields() {
//         var poll = {}
//         axios.get(`http://localhost:5000/polls/${this.props.match.params.id}`)
//         .then(res => {
//             poll = res.data
//             this.setState({
//                 poll: poll,
//                 answer: poll.answers[0]._id
//             })
//         })
//         .catch(err => console.log(err))
//     }

//     render() {
//         const poll = this.state.poll
//         let answers = poll.answers
//         if (typeof(answers) === "undefined") {
//             return <div></div>
//         }
//         return (
//             <div className="root">
//                 <Paper className="form">
//                     <form className="formBody" onSubmit={this.handleSubmit} >
//                         <h1>{poll.question}</h1>
//                         <FormControl required>
//                             <RadioGroup onChange={this.handleChange} required>
//                                 {poll.answers.map((ans)=>(
//                                 <FormControlLabel key={ans._id} value={ans._id} control={<Radio required />} label={ans.body} />
//                                 ))}
//                             </RadioGroup>
//                             <Grid container alignItems="stretch">
//                                     <Grid item>
//                                         <Button color="primary" variant="contained" type="submit" onSubmit={this.handleSubmit}>Submit Response</Button>
//                                     </Grid>
//                                     <Grid item>
//                                         <Link exact to={`../results/${this.props.match.params.id}`}>
//                                             <Button color="default" variant="contained">View Results</Button>
//                                         </Link>
//                                     </Grid>
//                             </Grid>
//                         </FormControl>
//                     </form>
//                 </Paper>
//             </div>
//         )
//     }
// }

export default PollResponseForm