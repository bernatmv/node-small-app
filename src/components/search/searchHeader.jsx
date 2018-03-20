import React from 'react';
import BpkPanel from 'bpk-component-panel';
import BpkText from 'bpk-component-text';
import BpkLargeArrowIcon from 'bpk-component-icon/lg/long-arrow-right';

import STYLES from './searchHeader.scss';
const c = className => STYLES[className] || 'UNKNOWN';

const SearchHeader = () => (
  <BpkPanel
    padded={false}
    fullWidth={true}
    className={c('Search')} >
    <BpkText 
      className={c('Search__title')} >
      EDI <BpkLargeArrowIcon className={c('Search__arrow')} /> LOND
    </BpkText>
    <BpkText 
      className={c('Search__subTitle')} >
      2 travellers, economy
    </BpkText>
  </BpkPanel>
);

export default SearchHeader;