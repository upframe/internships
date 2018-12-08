import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';

import Main from './components/Main';
import Subscribe from './components/Subscribe';
import Apply from './components/Apply';
import Companies from './components/Companies';
import ErrorPage from './components/ErrorPage';

export default class App extends PureComponent {

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/subscribe' component={Subscribe} />
            <Route exact path='/companies' component={Companies} />
            <Route exact path='/404' component={ErrorPage} />
            <Route path='/:company/:position' component={Apply} />
            <Route path='/:random' component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
