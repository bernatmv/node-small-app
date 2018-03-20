import React from 'react';
import BpkPanel from 'bpk-component-panel';
import BpkText from 'bpk-component-text';
import BpkLargeAlertIcon from 'bpk-component-icon/lg/price-alerts';
import BpkLink from 'bpk-component-link';

import STYLES from './searchFilters.scss';
const c = className => STYLES[className] || 'UNKNOWN';

const SearchFilters = () => (
  <BpkPanel
    padded={false}
    fullWidth={true}
    className={c('Filters')} >
    <BpkLink 
      className={c('Filters__filter')}
      href="/">
      Filter
    </BpkLink>
    <BpkLink 
      className={c('Filters__sort')}
      href="/">
      Sort
    </BpkLink>
    <div className={c('Filters__gap')} />
    <BpkLink 
      className={c('Filters__alert')}
      href="/">
      <BpkLargeAlertIcon className={c('Filters__alert__icon')} />
      Price alerts
    </BpkLink>
  </BpkPanel>
);

export default SearchFilters;