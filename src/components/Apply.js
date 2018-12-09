import React, { PureComponent } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import APIservice from '../services/api.js';

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
        <div>
          <nav>
            <div className="wrapper">
              <img className="logo" src="/media/logo.svg" alt="Upframe" onClick={this.goHome}/>
              <ul>
                <li>
                  Internships
              </li>
              </ul>
            </div>
          </nav>
          <div className="header-smaller">
            <div>
              <h1>{this.state.currentInternship.Title} {this.state.currentInternship.Location}</h1>
            </div>
          </div>
          <div className="container">
            INTERNSHIPS  >  {this.state.currentInternship.Company.toUpperCase()}  >  {this.state.currentInternship.Title.toUpperCase()}
            <div>
              <h1>
                Job description
              </h1>
              <div>
                {this.state.currentInternship.JobDescription}
              </div>
              <h1>
                Main requirements
              </h1>
              <div>
                {this.state.currentInternship.MainRequirements}
              </div>
              <button onClick={this.apply}>Apply now</button>
              {/* Ambassador Begin */}
              <div>
                <img src={this.state.currentInternship.AmbassadorPic[0].thumbnails.large.url} alt='Ambassador'></img>
                <p>{this.state.currentInternship.AmbassadorBio}</p>
                <a href={'https://www.twitter.com/' + this.state.currentInternship.AmbassadorTwitter}>{this.state.currentInternship.AmbassadorTwitter}</a>
              </div>
              {/* End of Ambassador */}
            </div>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(Apply)