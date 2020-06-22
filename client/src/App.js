import React from 'react';
import './App.css';
import Header from './component/Header'
import Content from './component/Content'
import PollResults from './component/PollResults';
import { BrowserRouter as Router, Route} from 'react-router-dom'

const App = props => {
  return(
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/" component={Content} />
        <Route path="/poll/:id" component={PollResults} />
      </Router>
    </div>
  )
}

export default App