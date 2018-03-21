import React from 'react';
import BpkText from 'bpk-component-text';
import BpkButton from 'bpk-component-button';

import STYLES from './footer.scss';
const c = className => STYLES[className] || 'UNKNOWN';

const Footer = ({price, agent, currency}) => (
  <div>
    <div
      className={c('Footer__action')} >
      <BpkText 
        className={c('Footer__action__price')} >
        {price}{currency}
      </BpkText>
      <BpkText 
        className={c('Footer__action__agent')} >
        {agent}
      </BpkText>
    </div>
    <BpkButton 
      className={c('Footer__select')} >
      Select
    </BpkButton>
  </div>
);

export default Footer;