import React, { Component } from 'react';
import './App.css';

import APIservice from './services/api.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      offers: []
    }

    APIservice.getAllOffers().then(data => 
      this.setState({ offers: data.records })
    )
  }

  handleNameChange = (event) => { this.setState({ name: event.target.value }) }
  handleEmailChange = (event) => { this.setState({ email: event.target.value }) }

  loadOffers() {
    return APIservice.getAllOffers()
  }

  render() {
    return (
      <div className="app">
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
        <header>
          <div>
            <h1>Startup Mojo</h1>
            <p>Find your first student internship across the hottest startups
              in Europe and jumpstart your f*cking career.</p>
          </div>
        </header>
        <div className="container">
          <div className="offerList">
            {this.state.offers.map(offer => {
              return (
                <div className="offerItem" data-id={offer.id} key={offer.id}>
                  <div className="mainInfo">
                    <p id="company">{offer.fields.Company}</p>
                    <h2>{offer.fields.Title}</h2>
                  </div>
                  <div className="secondaryInfo badge">
                    {offer.fields.Location}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="application">
            <div>
              <h1>So, you're in?</h1>
              <p>We'll update you as soon as we have everything set so you
                can find or post your internship oportunity</p>
              <input type="text" onChange={this.handleNameChange} value={this.state.name} placeholder="Your name" required></input>
              <input type="email" onChange={this.handleEmailChange} value={this.state.email} placeholder="Tyrone@example.com" required></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
