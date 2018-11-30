export class APIservice {
  constructor() {
    this.links = {
      'baseURL': 'https://api.airtable.com/v0/appo02AK8zYXMQevx/',
      'tables': ['Main']
    }
  }
  
  defaultOptions() {
    return {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLEKEY}`
      }
    }
  }

  async getAllOffers(table = 'Main') {
    let options = this.defaultOptions()
    return (await fetch(this.links.baseURL + table, options).then(res => res.json()));
  }
}

export default new APIservice();