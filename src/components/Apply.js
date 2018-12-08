import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';

export default class Apply extends PureComponent {

  apply = () => {
    alert('Applying')
  }

  render() {
    if (this.props.currentInternship === undefined) {
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
              <h1>{this.props.currentInternship.fields.Title}</h1>
            </div>
          </div>
          <div className="container">
            INTERNSHIPS > {this.props.currentInternship.fields.Company.toUpperCase()} > {this.props.currentInternship.fields.Title.toUpperCase()}
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