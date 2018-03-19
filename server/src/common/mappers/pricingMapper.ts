import { PricingDto } from "../dtos/readServices/referenceDataDtos";
import { 
  Pricing,
  Agent 
} from "../models/";
import ReferenceDataStore from "../referenceData/referenceDataStore";

class PricingMapper {

  constructor(
    private _referenceData: ReferenceDataStore
  ) {}

  map(dto: PricingDto): Pricing {
    return new Pricing(
      dto.Agents.map(id => this._referenceData.agents.get(id)),
      dto.QuoteAgeInMinutes,
      dto.Price
    );
  }
}
export default PricingMapper;