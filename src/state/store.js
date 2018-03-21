import { combineReducers, createStore } from 'redux';
import { itineraries } from '../reducers/reducers';

const appReducer = combineReducers({ itineraries });
const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;