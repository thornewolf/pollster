import React from 'react';
import { Grid } from '@material-ui/core'
import PollItem from './PollItem'

const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];

function PollList() {
  return (
    <Grid container>
      <Grid item>
        <h1>
          Top Polls
        </h1>
      </Grid>
      <Grid
          container
          direction="row"
          spacing={3}
        >

          {items.map((itemId) => (
            <Grid item xs={12} md={6} lg={3} key={itemId}>
              <PollItem />
            </Grid>
          ))}
        </Grid>
      </Grid>
  )
}

export default PollList;