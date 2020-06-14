import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FeatureBar from './FeatureBar'
import PollList from './PollList'
import Sidebar from './Sidebar'
import PollCreatorForm from './PollCreatorForm'
import './Content.css'

function Content() {
    return (
        <Grid
        container
        direction="row"
        className="Content"
        alignItems="left"
        spacing={2}>
            <Grid item sm={12} lg={9} style={{ paddingRight: "20px"}}>
                <Grid
                container
                direction="column" >
                    <Grid item style={{ paddingTop: "3vh" }} >
                        <PollCreatorForm />
                    </Grid>
                    <Grid item>
                        <PollList />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={0} lg="3" style={{ paddingRight: "20px"}}>
                <FeatureBar />
            </Grid>
            
            
        </Grid>
    )
}

export default Content;