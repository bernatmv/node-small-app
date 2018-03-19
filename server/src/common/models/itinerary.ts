import { Leg, Pricing } from "./";

export default class Itinerary {
  constructor(
    public outboundLeg: Leg,
    public inboundLeg: Leg,
    public pricingOptions: Pricing[]
  ) {}
}
