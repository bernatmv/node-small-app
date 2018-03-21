import React from 'react';
import BpkPanel from 'bpk-component-panel';
import BpkText from 'bpk-component-text';
import BpkLargeArrowIcon from 'bpk-component-icon/lg/long-arrow-right';

import STYLES from './searchHeader.scss';
const c = className => STYLES[className] || 'UNKNOWN';

const SearchHeader = ({from, to, travellers, travelClass}) => (
  <BpkPanel
    padded={false}
    fullWidth={true}
    className={c('Search')} >
    <BpkText 
      className={c('Search__title')} >
      {from} <BpkLargeArrowIcon className={c('Search__arrow')} /> {to}
    </BpkText>
    <BpkText 
      className={c('Search__subTitle')} >
      {travellers} traveller{travellers > 1 ? 's' : ''}, {travelClass}
    </BpkText>
  </BpkPanel>
);

export default SearchHeader;