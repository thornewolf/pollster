import React from 'react';
import { Grid } from '@material-ui/core';
import FeatureBar from './FeatureBar'
import PollList from './PollList'
import PollCreatorForm from './PollCreatorForm'
import PollResponseForm from './PollResponseForm'

import './Content.css'

function Content(props) {
    return (
        <Grid
        container
        direction="row"
        className="Content"
        spacing={2}>
            <Grid item sm={12} lg={9} style={{ paddingRight: "20px"}}>
                <Grid
                container
                direction="column" >
                    <Grid item style={{ paddingTop: "3vh" }} >
                        <PollCreatorForm />
                    </Grid>
                    <Grid item>
                        <PollList setLocationCallback={props.setLocationCallback} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={3} style={{ paddingRight: "20px"}}>
                <FeatureBar setLocationCallback={props.setLocationCallback}/>
            </Grid>
            
            
        </Grid>
    )
}

export default Content;