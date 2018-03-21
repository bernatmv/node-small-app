import React from 'react';
import BpkText from 'bpk-component-text';
import SearchHeader from '../search/searchHeader';
import SearchFilters from '../search/searchFilters';
import ItineraryList from '../itinerary/itineraryList';

import STYLES from './livePricing.scss';
const c = className => STYLES[className] || 'UNKNOWN';

const LivePricing = ({ header, itineraries, currency, loading }, ...rest) => {
  return <article className={c('Article')}>
    <SearchHeader {...header} />
    <SearchFilters />
    {loading ? <Loading /> : <ItineraryList itineraries={itineraries} currency={currency} />}
  </article>
};

function Loading() {
  return <div className={c('Loading')}>
    <BpkText 
      className={c('Loading__text')} >
      Loading...
    </BpkText>
  </div>;
}

export default LivePricing;