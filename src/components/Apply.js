import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import APIservice from '../services/api.js';

export default class Apply extends PureComponent {

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
      if (records[i].fields.Company.toLowerCase().replace(/ /g, '-') === this.state.company && this.state.position === records[i].fields.Title.toLowerCase().replace(/ /g, '-')) {
        return records[i]
      }
    }
  }

  componentDidMount() {
    APIservice.getAllOffers().then(data => {
      this.setState({
        currentInternship: this.getCurrentJob(data.records)
      })
    })
  }

  apply = () => {
    alert('Applying')
  }

  render() {
    if (this.state.currentInternship === undefined) {
      return (
        <Redirect to='/404' />
      )
    } else {
      console.log(this.props.currentInternship)
      return (
        <div>
          <nav>
            <div className="wrapper">
              <img className="logo" src="/media/logo.svg" alt="Upframe"></img>
              <ul>
                <li>
                  Internships
              </li>
              </ul>
            </div>
          </nav>
          <div className="header-smaller">
            <div>
              <h1>{this.state.currentInternship.fields.Title}</h1>
            </div>
          </div>
          <div className="container">
            INTERNSHIPS > {this.state.currentInternship.fields.Company.toUpperCase()} > {this.state.currentInternship.fields.Title.toUpperCase()}
            <div>
              <h1>
                Job description
              </h1>
              <div>
                Tenho que ir buscar ao airtable
              </div>
              <h1>
                Main requirements
              </h1>
              <div>
                tenho que ir buscar ao airtable
              </div>
              <button onClick={this.apply}>Apply now</button>
              <div>
                Photo do Malik
                <p>
                  At Upframe we believe anyone can make a difference. I'm a Co-founder at Upframe
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}