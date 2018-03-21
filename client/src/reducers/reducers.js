import { initialState } from '../state/initialState';
import Constants from '../common/constants'
import { client } from '../common/client';
import store from '../state/store';
import { displayLivePrices } from '../actions/actions';
import Config from '../config/config'

export const itineraries = (state = initialState, action) => {

  switch (action.type) {

    case Constants.Actions.LoadLivePrices: {
      // call to server
      client
        .getLivePrices(action.query)          // Live server
        //.getLivePricesMock(action.query)    // Mocked server
        .then(
          response => {
            console.log('response from ther server', response);
            return response ? response.json() : null;
          },
          console.error
        )
        .then(data => {
          return {
            itineraries: data ? data.itineraries : [],
            currency: data ? data.currency : ''
          };
        })
        .then(({itineraries, currency}) => {
          console.log(itinerariesCutOfffMessage)
          itineraries = itineraries.length > Config.MaxResults ? itineraries.slice(0,Config.MaxResults) : itineraries;
          console.log('final registers to be displayed', itineraries);
          store.dispatch(displayLivePrices({itineraries: itineraries, currency: currency}));
        });
      return Object.assign({}, state, {loading: true});
    }

    case Constants.Actions.DisplayLivePrices: {
      return Object.assign({}, state, {loading: false, itineraries: action.data.itineraries, currency: action.data.currency});
    }

    default:
      return state;
  }
};

const itinerariesCutOfffMessage = `
got ${itineraries.length} registers 
(will trim to ${Config.MaxResults} if there are more as it doesn't make sense to do pagination with the server for this task)

`;