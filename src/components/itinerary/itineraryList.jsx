import React from 'react';
import BpkPanel from 'bpk-component-panel';
import ItineraryElement from './itineraryElement';

import STYLES from './itineraryList.scss';
const c = className => STYLES[className] || 'UNKNOWN';

const ItineraryList = () => (
  <BpkPanel
    padded={false}
    fullWidth={true}
    className={c('List')} >
    <ItineraryElement />
  </BpkPanel>
);

export default ItineraryList;