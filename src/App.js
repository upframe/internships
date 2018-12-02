import React, { Component } from 'react';
import './App.css';

import APIservice from './services/api.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      offers: []
    }

    APIservice.getAllOffers().then(data => 
      this.setState({ offers: data.records })
    )
  }

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
        </div>
      </div>
    );
  }
}

export default App;
