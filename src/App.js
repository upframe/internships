import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';

import Main from './components/Main';
import Subscribe from './components/Subscribe';
import Apply from './components/Apply';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/subscribe' component={Subscribe} />
            <Route path='/' component={Apply} />
          </Switch>
        </div>
      </Router>
    );
  }
}
