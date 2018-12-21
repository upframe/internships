// 60 seconds
const EXPIRY = 60 * 1000;

export class APIservice {
  constructor() {
    this.cache = {}

    this.links = {
      'baseURL': 'https://api.airtable.com/v0/appo02AK8zYXMQevx/',
      'tables': ['Main']
    }
  }
  
  defaultOptions() {
    return {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.PREACT_APP_AIRTABLEKEY}`
      }
    }
  }

  async getJson(url, options) {
    const cacheKey = JSON.stringify({ url, options });
    let cached = this.cache[cacheKey]

    // if there's a valid cached resource (promise)
    if (cached && cached.time > Date.now() - EXPIRY) {
      return cached;
    }

    const req = fetch(url, options).then( r => r.json() );
    // store the promise in our cache (perk: dedupes in-flight requests)
    req.time = Date.now();
    this.cache[cacheKey] = req;
    return await req;
  }

  async getAllOffers(table = 'Main') {
    let options = this.defaultOptions()
    return await this.getJson(this.links.baseURL + table, options)
  }
}

export default new APIservice();