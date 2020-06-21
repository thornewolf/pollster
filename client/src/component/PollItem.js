import React from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, Typography, Button, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import './PollItem.css'

const useStyles = makeStyles({
    root: {
    },
    takePoll: {
        marginRight: 'auto',
    },
    viewResults: {
        marginLeft: 'auto',
    },
  });  

function PollItem(props) {
    const classes = useStyles();
    return (
        <Paper>
            <Card 
            className={props.className || classes.root}
            variant="outlined"
        >
            <CardContent>
                <Typography variant="h3">
                </Typography>
                <Typography variant="body1" component="p">
                   {props.question} 
                </Typography>
                
            </CardContent>
            <CardActions spacing={10}>
                <Button className={classes.takePoll} color="primary" variant="outlined">Take Poll</Button>
                <Link to={`/poll/${props.pollId}`}>
                    <Button className={classes.viewResults} color="secondary" variant="outlined">Results</Button>
                </Link>
            </CardActions>
        </Card>
        </Paper>
    )
}

export default PollItem;