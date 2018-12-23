import { Component } from 'preact';

import APIservice from '../services/api.js';

import Navbar from './Navbar';

export default class Main extends Component {
  state = {
    offers: []
  }

  componentDidMount () {
    document.title = 'Startup Mojo'
    
    APIservice.getAllOffers().then((data) => {
      let filteredOffers = data.records.filter((element) => this.isComplete(element))
      this.setState({ offers: filteredOffers })
    })
  }

  //Verifica se uma oferta esta completa para nao crashar o site
  isComplete (offer) {
    return offer.fields.Company !== undefined 
        && offer.fields.Title !== undefined 
        && offer.fields.Location !== undefined
        && offer.fields.Country !== undefined
        && offer.fields.JobDescription !== undefined
        && offer.fields.MainRequirements !== undefined
        && offer.fields.AmbassadorBio !== undefined
        && offer.fields.AmbassadorPic !== undefined
        && offer.fields.AmbassadorTwitter !== undefined
  }

  escape (value) {
    return encodeURIComponent(value.toLowerCase().replace(/ /g, '-'))
  }

  createLink (company, position) {
    return '/' + this.escape(company) + '/' + this.escape(position)
  }

  render() {
    return(
      <div id="main">
        <Navbar />
        <header>
          <div>
            <h1>Startup Mojo</h1>
            <p>Find your first student internship across the hottest startups
              in Europe and jumpstart your f*cking career.</p>
          </div>
        </header>
        <div className="container">
          <div className="offerList">
            {this.state.offers.map((offer) => {
              return (
                <a href={this.createLink(offer.fields.Company, offer.fields.Title)} style={{ textDecoration: 'none' }} key={offer.id}>
                  <div className="offerItem" data-id={offer.id} key={offer.id}>
                    <div className="mainInfo">
                      <p id="company">{offer.fields.Company}</p>
                      <h2>{offer.fields.Title}</h2>
                    </div>
                    <div className="secondaryInfo badge">
                      {offer.fields.Location}
                    </div>
                  </div>
                </a> 
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}