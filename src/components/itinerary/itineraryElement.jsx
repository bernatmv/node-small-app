import React from 'react';
import BpkCard from 'bpk-component-card';
import BpkImage from 'bpk-component-image';
import BpkText from 'bpk-component-text';
import BpkButton from 'bpk-component-button';
import BpkSmallArrowIcon from 'bpk-component-icon/sm/long-arrow-right';

import STYLES from './itineraryElement.scss';
const c = className => STYLES[className] || 'UNKNOWN';

const ElementDeparture = () => (
  <div
    className={c('Element__departure')} >
    <BpkText 
      className={c('Element__departure__time')} >
      07:30
    </BpkText>
    <BpkText 
      className={c('Element__departure__acronym')} >
      EDI
    </BpkText>
  </div>
);

const ElementArrival = () => (
  <div
    className={c('Element__arrival')} >
    <BpkText 
      className={c('Element__arrival__time')} >
      09:00
    </BpkText>
    <BpkText 
      className={c('Element__arrival__acronym')} >
      LOND
    </BpkText>
  </div>
);

const ElementRow = () => (
  <div
    className={c('Element__row')} >
    <div
      className={c('Element__logo')} >
      <BpkImage 
        altText={"flyAway"} width={32} height={32}
        src={"https://logos.skyscnr.com/images/airlines/favicon/EZ.png"} />
    </div>
    <ElementDeparture />
    <BpkSmallArrowIcon className={c('Element__arrow')} />
    <ElementArrival />
    <div
      className={c('Element__gap')} />
    <div
      className={c('Element__data')} >
      <BpkText 
        className={c('Element__data__duration')} >
        1h 30
      </BpkText>
      <BpkText 
        className={c('Element__data__direct')} >
        Direct
      </BpkText>
    </div>
  </div>
);

const ElementFooter = () => (
  <div>
    <div
      className={c('Element__action')} >
      <BpkText 
        className={c('Element__action__price')} >
        98€
      </BpkText>
      <BpkText 
        className={c('Element__action__agent')} >
        omegaflightstore.com
      </BpkText>
    </div>
    <BpkButton 
      className={c('Element__select')} >
      Select
    </BpkButton>
  </div>
);

const ItineraryElement = () => (
  <BpkCard
    padded={true}
    className={c('Element')} >
    <ElementRow />
    <ElementRow />
    <ElementFooter />
  </BpkCard>
);

export default ItineraryElement;