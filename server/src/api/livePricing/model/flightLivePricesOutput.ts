export default interface FightLivePricesOutput {
  itineraries: ItineraryOut[];
  currency: string;
}

interface ItineraryOut {
  outboundLeg: LegOut;
  inboundLeg: LegOut;
  prices: PriceOut[];
}

interface PriceOut {
  agent: string;
  price: number;
}

interface LegOut {
  segments: SegmentOut[];
  directionality: string;
}

interface SegmentOut {
  carrier: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: number;
}
