import React from 'react';
import './App.css';
import Header from './Header'
import Content from './Content'
import PollResponseForm from './PollResponseForm'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: "home",
      locationTransitionData: {}
    }
    this.setLocationCallback = this.setLocationCallback.bind(this)
  }

  setLocationCallback(location, transitionData={}) {
    console.log("callback run")
    console.log(transitionData)
    this.setState({
      location: location,
      locationTransitionData: transitionData
    })
  }

  // TODO: Implement the responding view. Considerations are if the poll card
  // should expand to allow taking the poll, or if the entire view should be
  // taken over. Leaning towards full view takeover. Need flow design 
  // discussion. 
  render() {
    switch(this.state.location) {
      case "home":
        return (
          <div className="App">
            <Header />
            <Content setLocationCallback={this.setLocationCallback} />
          </div>
        );
      case "responding":
        return (
          <div className="App">
            <Header />
            <PollResponseForm setLocationCallback={this.setLocationCallback} pollId={this.state.locationTransitionData.pollId}/>
          </div>
        )
      case "results":
        return (
          <div className="App">
            <Header />
            <div>You are now viewing results</div>
            
          </div>
        )
    }
  }
}

export default App;
