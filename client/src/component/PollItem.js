import React from 'react';
import logo from '../logo.png';
import Card from '@material-ui/core/Card';
import { CardContent, Typography, Button, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './PollItem.css'

const useStyles = makeStyles({
    root: {
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
                    Pollsters of Pollster, what is your favorite color to eat?
                </Typography>
                
            </CardContent>
            <CardActions>
                <Button>Take Poll</Button>
                <Typography variant="body1" component="p" color="textSecondary" align="right">
                    5 min
                </Typography>
            </CardActions>
        </Card>
        </Paper>
    )
}

export default PollItem;