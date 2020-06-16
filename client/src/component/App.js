import React from 'react';
import './App.css';
import Header from './Header'
import Content from './Content'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: "home"
    }
    this.setLocationCallback = this.setLocationCallback.bind(this)
  }

  setLocationCallback(location) {
    this.setState({
      location: location
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
            <div>You are now responding</div>
          </div>
        )
      case "results":
        return (
          <div className="App">
            <div>You are now viewing results</div>
          </div>
        )
    }
  }
}

export default App;
