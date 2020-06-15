import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import PollItem from './PollItem'
import PollCreatorForm from './PollCreatorForm'

const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];

const useStyles = makeStyles({
    root: {

    },
    item: {

    }
});

export default function Sidebar() {
    const classes = useStyles()
    return (
        <Grid
        container
        direction="column">
            <Grid item />
            <Grid item style={{ paddingTop: "5vh" }}>
                <PollCreatorForm />
            </Grid>
        </Grid>
    )
}