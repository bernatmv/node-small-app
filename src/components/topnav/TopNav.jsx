import React from 'react';
import BpkImage from 'bpk-component-image';
import BpkLargeMenuIcon from 'bpk-component-icon/lg/menu';

import STYLES from './TopNav.scss';
import logo from '../..//logo.svg';
const c = className => STYLES[className] || 'UNKNOWN';

const TopNav = () => (
  <header className={c('App__header')}>
    <a href="/">
      <span className={c('App__logo-text')}>Skyscanner</span>
      <BpkImage 
        altText={"Skyscanner"} 
        className={c('App__logo')} 
        src={logo}
        width={46}
        height={28} />
    </a>
    <BpkLargeMenuIcon className={c('App__menu')} />
  </header>
);

export default TopNav;
