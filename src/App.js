import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import APIservice from './services/api.js';

import './App.css';

import Main from './components/Main';
import Subscribe from './components/Subscribe';
import Apply from './components/Apply';
import Companies from './components/Companies';
import ErrorPage from './components/ErrorPage';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      company: window.location.pathname.split('/')[1],
      position: window.location.pathname.split('/')[2],
      currentInternship: {
        fields: {
          Company: 'Loading',
          Title: 'Loading'
        }
      }
    }
  }

  getCurrentJob = (records) => {
    for (let i = 0; i < records.length; i++) {
      if (records[i].fields.Company.toLowerCase() === this.state.company && this.state.position === records[i].fields.Title.toLowerCase().replace(/ /g, '-')) {
        return records[i]
      }
    }
  }

  componentDidMount() {
    if (this.state.company !== 'subscribe' && this.state.company !== 'companies') {
      APIservice.getAllOffers().then(data => {
        this.setState({
          currentInternship: this.getCurrentJob(data.records)
        })
      })
    }
  }

  Apply = () => {
    return (
      <Apply currentInternship={this.state.currentInternship} />
    )
  }

  render() {
    console.log(window.location.href)
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/subscribe' component={Subscribe} />
            <Route exact path='/companies' component={Companies} />
            <Route exact path='/404' component={ErrorPage} />
            <Route path='/:company/:position' component={this.Apply} />
          </Switch>
        </div>
      </Router>
    );
  }
}
