import React from 'react';
import BpkCard from 'bpk-component-card';
import BpkImage from 'bpk-component-image';
import BpkText from 'bpk-component-text';
import BpkButton from 'bpk-component-button';
import BpkSmallArrowIcon from 'bpk-component-icon/sm/long-arrow-right';
import Segment from './segment';
import Footer from './footer';
import uuid from 'uuid';

import STYLES from './itineraryElement.scss';
const c = className => STYLES[className] || 'UNKNOWN';

const ItineraryElement = ({outboundLeg, inboundLeg, price, agent, currency}) => {
  return <BpkCard
    padded={true}
    className={c('Element')} >
    {
      outboundLeg.segments.map(segment => 
        <Segment 
          {...segment} 
          direct={outboundLeg.segments.length === 1} 
          key={uuid.v4()} />
      )
    }
    {
      inboundLeg.segments.map(segment => 
        <Segment 
          {...segment} 
          direct={inboundLeg.segments.length === 1} 
          key={uuid.v4()} />
      )
    }
    <Footer 
      price={price} 
      agent={agent} 
      currency={currency} />
  </BpkCard>
};

export default ItineraryElement;