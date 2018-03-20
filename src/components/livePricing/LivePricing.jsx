import React from 'react';
import SearchHeader from '../search/searchHeader';
import SearchFilters from '../search/searchFilters';
import ItineraryList from '../itinerary/itineraryList';

const LivePricing = () => (
  <article>
    <SearchHeader />
    <SearchFilters />
    <ItineraryList />
  </article>
);

export default LivePricing;