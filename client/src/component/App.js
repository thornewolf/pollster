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
  }
  render() {
    if (this.state.location === "home") {
      return (
        <div className="App">
          <Header />
          <Content />
        </div>
      );
    }
    return null
  }
}

export default App;
