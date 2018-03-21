import React from 'react';
import TopNav from './components/topnav/TopNav';
import LivePricing from './components/livePricing/LivePricing';

import STYLES from './App.scss';
const c = className => STYLES[className] || 'UNKNOWN';

const App = (props) => {
  return <div className={c('App')}>
    <TopNav/>
    <LivePricing {...props.itineraries} />
  </div>
};

export default App;