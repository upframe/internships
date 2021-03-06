import { Component } from 'preact';
import { route } from 'preact-router';

import APIservice from '../services/api.js';

import Navbar from './Navbar';
import ErrorPage from './ErrorPage';

export default class Apply extends Component {

  constructor(props) {
    super(props)
    this.state = {
      company: props.company,
      position: props.position,
      currentInternship: { //These are all the fields we need. Before we get them we display a placeholder
        Company: 'Loading',
        Title: 'Loading',
        Location: '',
        AmbassadorBio: 'Loading',
        AmbassadorPic: [{
          thumbnails: {
            large: 'Loading'
          }
        }],
        AmbassadorTwitter: 'Loading',
        MainRequirements: 'Loading',
        JobDescription: 'Loading',
        ApplyUrl: ''
      }
    }
  }

  getCurrentJob = (records) => {
    for (let i = 0; i < records.length; i++) {
      try {
        if (records[i].fields.Company.toLowerCase().replace(/ /g, '-') === this.state.company && this.state.position === records[i].fields.Title.toLowerCase().replace(/ /g, '-')) {
          return records[i].fields
        }
      } catch (anything) {
        //Something is undefined, just next
      }
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    APIservice.getAllOffers().then((data) => {
      this.setState({
        currentInternship: this.getCurrentJob(data.records)
      })
    })
  }

  apply = () => {
    window.location = this.state.currentInternship.ApplyUrl
  }

  goHome = () => {
    route('/');
  }

  displayMainRequirements = () => {
    this.state.currentInternship.MainRequirements.split('\n').map((element) => {
      return (
        <div className="paragraph color-darkgray">
          {element}
        </div>
      )
    })
  }

  render() {
    if (this.state.currentInternship === undefined) {
      return (
        <ErrorPage />
      )
    } else {
      let startupFilterURL = '/?company=' + this.state.currentInternship.Company;
      return (
        <div id="apply">
          <Navbar />

          <header>
            <div>
              <h1 className="title-1">{this.state.currentInternship.Title} {this.state.currentInternship.Location}</h1>
            </div>
          </header>

          <main>
            <div className="container container-wider">
              <ul className="breadcrumbs">
                <a href="/" className="item"><li>INTERNSHIPS</li></a>
                <a href={startupFilterURL} className="item"><li className="item">{this.state.currentInternship.Company.toUpperCase()}</li></a>
                <a href="." className="item active bold"><li>{this.state.currentInternship.Title.toUpperCase()}</li></a>
              </ul>

              <div className="grid">
                <div>
                  <div>
                    <h1 className="title-2 normal color-primary">Job description</h1>
                    <ul className="description">
                      {this.state.currentInternship.JobDescription.split('\n').map((element) => {
                        return (
                          <li className="color-darkgray">
                            {element}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  <div>
                    <h1 className="title-2 normal color-primary">Main requirements</h1>
                    <ul className="requirements">
                      {this.state.currentInternship.MainRequirements.split('\n').map((element) => {
                        return (
                          <li className="color-darkgray">
                            {element}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-column">
                  <div id="calltoaction">
                    <button className="btn btn-primary" onClick={this.apply}>Apply now</button>
                  </div>
                  <div className="card color-darkgray">
                    <div className="flex flex-column items-center">
                      <img className="image round" id="ambassador-profile" src={this.state.currentInternship.AmbassadorPic[0].thumbnails.large.url} alt='Ambassador'></img>
                      <p>{this.state.currentInternship.AmbassadorBio}</p>
                    </div>
                      <div className="border-all">
                        <a href={'https://www.twitter.com/' + this.state.currentInternship.AmbassadorTwitter} target="_blank" rel="noopener noreferrer">{this.state.currentInternship.AmbassadorTwitter}</a>
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
