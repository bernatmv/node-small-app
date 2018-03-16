import { ItineraryDto } from "../dtos/readServices/referenceDataDtos";
import { 
  Itinerary,
  Agent 
} from "../models/";
import PricingMapper from "./pricingMapper";

class ItineraryMapper {
  constructor(
    private _pricingMapper: PricingMapper
  ) {}

  map(dto: ItineraryDto, agents: Agent[]): Itinerary {
    return new Itinerary(
      dto.OutboundLegId,
      dto.InboundLegId,
      dto.PricingOptions.map(pricing => this._pricingMapper.map(pricing, agents))
    );
  }
}
export default ItineraryMapper;