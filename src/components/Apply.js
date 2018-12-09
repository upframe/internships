import React, { PureComponent } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import APIservice from '../services/api.js';

import Navbar from './Navbar';

class Apply extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      company: window.location.pathname.split('/')[1],
      position: window.location.pathname.split('/')[2],
      currentInternship: { //These are all the fields we need. Before we get them we display a placeholder
        Company: 'Loading',
        Title: 'Loading',
        Location: 'Loading',
        AmbassadorBio: 'Loading',
        AmbassadorPic: [{
          thumbnails: {
            large: 'Loading'
          }
        }],
        AmbassadorTwitter: 'Loading',
        MainRequirements: 'Loading',
        JobDescription: 'Loading'
      }
    }
  }

  getCurrentJob = (records) => {
    for (let i = 0; i < records.length; i++) {
      try {
        if (records[i].fields.Company.toLowerCase().replace(/ /g, '-') === this.state.company && this.state.position === records[i].fields.Title.toLowerCase().replace(/ /g, '-')) {
          return records[i].fields
        }
      } catch {
        //Something is undefined, just next
      }
    }
  }

  componentDidMount() {
    APIservice.getAllOffers().then((data) => {
      this.setState({
        currentInternship: this.getCurrentJob(data.records)
      })
    })
  }

  apply = () => {
    alert('Applying')
  }

  goHome = () => {
    this.props.history.push('/');
  }

  render() {
    if (this.state.currentInternship === undefined) {
      return (
        <Redirect to='/404' />
      )
    } else {
      return (
        <div id="apply">
          <Navbar />

          <header>
            <h1>{this.state.currentInternship.Title} {this.state.currentInternship.Location}</h1>
          </header>

          <main>
            <div className="container container-wider">
              <ul className="breadcrumbs">
                <li className="item">INTERNSHIPS</li>
                <li>></li>
                <li className="item">{this.state.currentInternship.Company.toUpperCase()}</li>
                <li>></li>
                <li className="item color-primary bold">{this.state.currentInternship.Title.toUpperCase()}</li>
              </ul>

              <div className="grid">
                <div>
                  <div>
                    <h1 className="title-2 normal color-primary">Job description</h1>
                    <div className="color-darkgray">
                      {/*this.state.currentInternship.JobDescription */}
                      <p>The Uniplaces Ambassador Program is a community of hardworking, creative and motivated students who
                        live to make a difference. It is an opportunity to discover the capabilities of each and create a personal
                        impact in one of the most recognized startups in Europe.</p>

                      <p>We are looking for university students to enter the program in Spain. You are a sociable person, who knows
                        the whole campus and, most importantly, do you have sales skills? If you have answered yes to all of the 
                        above questions, you would be the best Operations Ambassador!</p>
                      
                      <p>Ser Operations Ambassador is the perfect freelance work for a student. You decide your schedule and make
                        your piggy bank. All up to you! Your main task is to help international students find a home in a new city.
                        Contact them, help them find accommodation, follow up on the booking process and, if necessary, answer 
                        their questions. You may even make friends along the way!</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="title-2 normal color-primary">Main requirements</h1>
                    <div className="color-darkgray">
                      {/*this.state.currentInternship.MainRequirements*/}
                    </div>
                  </div>
                </div>

                <div className="flex flex-column">
                  <button className="btn btn-primary" onClick={this.apply}>Apply now</button>
                  <div className="card color-darkgray">
                    <div className="flex flex-column items-center">
                      <img className="image round" id="ambassador-profile" src={this.state.currentInternship.AmbassadorPic[0].thumbnails.large.url} alt='Ambassador'></img>
                      <p>{this.state.currentInternship.AmbassadorBio}</p>
                    </div>
                      <div className="border-all">
                        <a href={'https://www.twitter.com/' + this.state.currentInternship.AmbassadorTwitter}>{this.state.currentInternship.AmbassadorTwitter}</a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      )
    }
  }
}

export default withRouter(Apply)