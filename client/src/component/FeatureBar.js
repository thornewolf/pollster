import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import PollItem from './PollItem'
import axios from 'axios'

const useStyles = makeStyles({
    root: {
      paddingTop: "10px"
    },
    item: {
    },
});
  
const FeatureBar = props => {
  const [items, setItems] = useState([])
  const classes = useStyles()

  useEffect(() => {
    axios.get('http://localhost:5000/polls/')
      .then(res => {
        setItems(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  })

  return (
    <Grid 
      container
      spacing={2}
      direction="column"
      className={classes.root}>
      <Grid item>
        <h2>Featured Polls</h2>
      </Grid>
      <Grid container direction="row" spacing={3}>
      {items.slice(0,5).map((item) => (
        <Grid item key={item._id} className={classes.item}>
          <PollItem question={item.question} pollId={item._id} setLocationCallback={props.setLocationCallback}/>
        </Grid>
      ))}
      </Grid>
    </Grid>
  )
}

export default FeatureBar;