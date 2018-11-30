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
        <div className="container">
          <div className="offerList">
            {this.state.offers.map(offer => {
              return (
                <div className="offerItem" data-id={offer.id} key={offer.id}>
                  <div>
                    <img className="companyLogo" src={ offer.fields.Photo === undefined ? '/media/default_company.svg' : offer.fields.Photo[0].url}alt={offer.fields.Company}></img>
                  </div>
                  <div>
                    <p>{offer.fields.Company}</p>
                    <h2>{offer.fields.Title}</h2>
                  </div>
                  <div>
                    <span className="badge">{offer.fields.Location}</span>
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
