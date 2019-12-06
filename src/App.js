import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>

  );
}

export default App;
