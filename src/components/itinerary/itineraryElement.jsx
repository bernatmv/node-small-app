import React from 'react';
import BpkCard from 'bpk-component-card';

import STYLES from './itineraryElement.scss';
const c = className => STYLES[className] || 'UNKNOWN';

const ItineraryElement = () => (
  <BpkCard
    padded={true}
    className={c('Element')} >
    Moc, moc
  </BpkCard>
);

export default ItineraryElement;