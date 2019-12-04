import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>

  );
}

export default App;
