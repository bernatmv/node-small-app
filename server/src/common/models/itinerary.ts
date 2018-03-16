import { Pricing } from "./";

export default class Itinerary {
  constructor(
    public outboundLegId: string,
    public inboundLegId: string,
    public pricingOptions: Pricing[]
  ) {}
}
