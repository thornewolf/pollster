import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import PollItem from './PollItem'

const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13];

const useStyles = makeStyles({
    root: {
      paddingTop: "10px"
    },
    item: {
    },
});
  
  function FeatureBar() {
    const classes = useStyles();
    return (
      <Grid 
        container
        spacing="2"
        direction="column"
        className={classes.root}>
        <Grid item>
          <h2>Featured Polls</h2>
        </Grid>
        <Grid container direction="row" spacing="3">
        {items.slice(0,5).map((itemId) => (
              <Grid item key={itemId} className={classes.item}>
                <PollItem className=" "/>
              </Grid>
            ))}
        </Grid>
      </Grid>
    )
  }

export default FeatureBar;