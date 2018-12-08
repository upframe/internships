import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import APIservice from '../services/api.js';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offers: []
    }
  }

  componentDidMount () {
    document.title = 'Startup Mojo'
    
    APIservice.getAllOffers().then(data => {
      let filteredOffers = data.records.filter(element => this.isComplete(element))
      this.setState({ offers: filteredOffers })
    })
  }

  //Verifica se uma oferta esta completa para nao crashar o site
  isComplete = (offer) => {
    return offer.fields.Company !== undefined && offer.fields.Title !== undefined && offer.fields.Location !== undefined
  }

  createLink = (company, position) => {
    return '/' + company.toLowerCase().replace(/ /g, '-') + '/' + position.toLowerCase().replace(/ /g, '-')
  }

  render() {
    return(
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
                <Link to={this.createLink(offer.fields.Company, offer.fields.Title)} style={{ textDecoration: 'none' }} key={offer.id}>
                  <div className="offerItem" data-id={offer.id} key={offer.id}>
                    <div className="mainInfo">
                      <p id="company">{offer.fields.Company}</p>
                      <h2>{offer.fields.Title}</h2>
                    </div>
                    <div className="secondaryInfo badge">
                      {offer.fields.Location}
                    </div>
                  </div>
                </Link> 
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}