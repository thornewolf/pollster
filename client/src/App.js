import React from 'react';
import './App.css';
import Header from './component/Header'
import Content from './component/Content'
import PollResponseForm from './component/PollResponseForm'
import PollResults from './component/PollResults';
import { BrowserRouter as Router, Route} from 'react-router-dom'

const App = props => {
  return(
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Content} />
        <Route exact path="/poll/response/:id" component={PollResponseForm} />
        <Route path="/poll/results/:id" component={PollResults} />
      </Router>
    </div>
  )
}

export default App