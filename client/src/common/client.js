import queryString from 'query-string';
import Config from '../config/config'
import MockData from './mock/mock.json';

const getFromUrl = (url, query) => {
  console.log(`fetching results from ${url} with query:`, query);
  return fetch(url + '?' + queryString.stringify(query));
}

export const client = {
  getLivePrices: (query) => {
      return getFromUrl(Config.Api.Url + Config.Api.Search, query);
  },
  getLivePricesMock: () => {
    return new Promise((resolve) => resolve({json: () => ({itineraries: MockData, currency: '£'})}));
  }
};