import React, { useState, useEffect } from 'react';
import { Paper, FormControl, RadioGroup, FormControlLabel, Radio, Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import './PollResponseForm.css'
import { Link } from 'react-router-dom';


const PollResponseForm = props => {
    const [poll, setPoll] = useState({})
    const [answer, setAnswer] = useState() 
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:5000/polls/${props.match.params.id}`)
            .then(res => {
                setPoll(res.data)
            })
        }, [])

    const handleChange = event => {
        setAnswer(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
            axios.patch(`http://localhost:5000/polls/${props.match.params.id}`, {
                "answer_id": answer 
            })
                .catch(err => {console.log(err)})
            history.push(`../../poll/results/${props.match.params.id}`)
    }

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

export default PollResponseForm