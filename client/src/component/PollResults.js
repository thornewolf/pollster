import React, { useState, useEffect } from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core'
import axios from 'axios'
import PollResultsChart from './PollResultsChart'


const useStyles = makeStyles({
    root: {
        padding: '80px 50px'
    }
})

const PollResults = props => {
    const [pollData, setPollData] = useState()
    useEffect(() => {
        axios.get(`http://localhost:5000/polls/${props.match.params.id}`)
            .then(res => setPollData(res.data))
    })

    const classes = useStyles()
    return (
        <Container className={classes.root}>
            <Grid direction="row">
                {pollData &&
                    <PollResultsChart pollData={pollData}/>
                }
            </Grid>
        </Container>
    )
}

export default PollResults 