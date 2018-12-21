import { Component } from 'preact';
import { Router, Route } from 'preact-router'

import './App.css';

import Main from './components/Main';
import Subscribe from './components/Subscribe';
import Companies from './components/Companies';
import ErrorPage from './components/ErrorPage';
// Move any component into src/routes to automatically lazy-load (code split) it.
import Apply from './routes/Apply';

export default class App extends Component {

  render() {
    return (
      <div className="app">
        <Router>
          <Route path='/' component={Main} />
          <Route path='/subscribe' component={Subscribe} />
          <Route path='/companies' component={Companies} />
          <Route path='/404' component={ErrorPage} />
          <Route path='/:company/:position' component={Apply} />
          <Route default component={ErrorPage} />
        </Router>
      </div>
    );
  }
}
