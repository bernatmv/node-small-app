import { ItineraryDto } from "../dtos/readServices/referenceDataDtos";
import { Itinerary, Leg } from "../models/";
import { PricingMapper } from "./";

class ItineraryMapper {
  constructor(
    private _pricingMapper: PricingMapper
  ) {}

  map(dto: ItineraryDto, legs: Leg[]): Itinerary {
    return new Itinerary(
      legs.find(el => el.id === dto.OutboundLegId),
      legs.find(el => el.id === dto.InboundLegId),
      dto.PricingOptions.map(pricing => this._pricingMapper.map(pricing))
    );
  }
}
export default ItineraryMapper;