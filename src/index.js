import 'bpk-stylesheets';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './state/store';
import Constants from './common/constants';
import { pad } from './common/utils';
import { loadLivePrices } from './actions/actions';

const rootElement = document.getElementById('root');

store.subscribe(() => {
  const newState = store.getState();
  render(rootElement, newState, store);
});

render(rootElement, store.getState());

function render(el, state) {
  ReactDOM.render(React.createElement(App, state), el);
}

//load data
const nextMonday = new Date()
nextMonday.setDate(nextMonday.getDate() + (1 + 7 - nextMonday.getDay()) % 7);
const nextMondayPlusOne = new Date()
nextMondayPlusOne.setDate(nextMonday.getDate() + 1);

store.dispatch(loadLivePrices({
  fromPlace: 'EDI',
  toPlace: 'LOND',
  fromDate: `${nextMonday.getFullYear()}-${pad(nextMonday.getMonth() + 1)}-${pad(nextMonday.getDate())}`,
  toDate: `${nextMondayPlusOne.getFullYear()}-${pad(nextMondayPlusOne.getMonth() + 1)}-${pad(nextMondayPlusOne.getDate())}`,
  adults: 1,
  class: 'Economy'
}));