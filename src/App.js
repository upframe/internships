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
        {/*
        <header>
          <div>
            <h1>Title</h1>
            <p>Paragraph</p>
          </div>
        </header>
        */}
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
