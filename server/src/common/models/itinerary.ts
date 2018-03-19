import { Leg, Pricing } from "./";

export default class Itinerary {
  constructor(
    public outboundLegId: Leg,
    public inboundLegId: Leg,
    public pricingOptions: Pricing[]
  ) {}
}
