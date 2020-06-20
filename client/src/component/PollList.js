import React from 'react';
import { Grid } from '@material-ui/core'
import PollItem from './PollItem'
import axios from 'axios'

class PollList extends React.Component { 
  constructor(props) {
    super(props)

    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/polls/')
      .then(res => {
        this.setState({items: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    console.log(this.state.items)
    return(
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
          {this.state.items.map(item => (
            <Grid item xs={12} md={6} lg={3} key={item._id}>
              <PollItem question={item.question} setLocationCallback={this.props.setLocationCallback} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    )
  } 
}


export default PollList 