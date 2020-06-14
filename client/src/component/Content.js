import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FeatureBar from './FeatureBar'
import PollList from './PollList'
import Sidebar from './Sidebar'
import './Content.css'

function Content() {
    return (
        <Grid
        container
        direction="row"
        className="Content">
            <Grid item xs="9">
                <Grid
                container
                direction="column" >
                    <Grid item>
                        <FeatureBar />
                    </Grid>
                    <Grid item>
                        <PollList />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs="3">
                <Sidebar />
            </Grid>
            
            
        </Grid>
    )
}

export default Content;