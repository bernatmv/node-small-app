import React from 'react';
import BpkImage from 'bpk-component-image';
import BpkText from 'bpk-component-text';
import BpkSmallArrowIcon from 'bpk-component-icon/sm/long-arrow-right';
import { pad } from '../../common/utils';

import STYLES from './segment.scss';
const c = className => STYLES[className] || 'UNKNOWN';

const Airport = ({place, time, isDeparture}) => {
  let date = new Date(+time);
  return <div
    className={c(isDeparture ? 'Segment__departure' : 'Segment__arrival')} >
    <BpkText 
      className={c(isDeparture ? 'Segment__departure__time' : 'Segment__arrival__time')} >
      {`${pad(date.getHours())}:${pad(date.getMinutes())}`}
    </BpkText>
    <BpkText 
      className={c(isDeparture ? 'Segment__departure__acronym' : 'Segment__arrival__acronym')} >
      {place}
    </BpkText>
  </div>
};

const Segment = ({carrier, from, to, departure, arrival, duration, direct}) => {
  let date = new Date(+(duration*60*1000));
  return <div
    className={c('Segment')} >
    <div
      className={c('Segment__logo')} >
      <BpkImage 
        altText={"flyAway"} width={32} height={32}
        src={`https://logos.skyscnr.com/images/airlines/favicon/${carrier}.png`} />
    </div>
    <Airport place={from} time={departure} isDeparture={true} />
    <BpkSmallArrowIcon className={c('Segment__arrow')} />
    <Airport place={to} time={arrival} isDeparture={false} />
    <div
      className={c('Segment__gap')} />
    <div
      className={c('Segment__data')} >
      <BpkText 
        className={c('Segment__data__duration')} >
        {`${date.getUTCHours()}h${date.getUTCMinutes() > 0 ? ' ' + date.getUTCMinutes() : ''}`}
      </BpkText>
      <BpkText 
        className={c('Segment__data__direct')} >
        {direct ? 'Direct' : ''}
      </BpkText>
    </div>
  </div>
};

export default Segment;