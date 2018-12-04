import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';

import Main from './components/Main';
import Subscribe from './components/Subscribe';
import Companies from './components/Companies';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/subscribe' component={Subscribe} />
            <Route exact path='/companies' component={Companies} />
          </Switch>
        </div>
      </Router>
    );
  }
}
