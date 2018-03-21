import React from 'react';
import BpkPanel from 'bpk-component-panel';
import ItineraryElement from './itineraryElement';
import uuid from 'uuid';

import STYLES from './itineraryList.scss';
const c = className => STYLES[className] || 'UNKNOWN';

const ItineraryList = ({itineraries, currency}) => {
  let rows = itineraries.map(itinerary => 
    itinerary.prices.map(element => 
      <ItineraryElement 
        key={uuid.v4()}
        outboundLeg={itinerary.outboundLeg} 
        inboundLeg={itinerary.inboundLeg} 
        price={element.price} 
        agent={element.agent}
        currency={currency} />
    )
  );
  rows = rows.concat.apply([], rows); // we flatten the 2-dimension array

  return <BpkPanel
    padded={false}
    fullWidth={true}
    className={c('List')} >
    {rows}
  </BpkPanel>
};

export default ItineraryList;