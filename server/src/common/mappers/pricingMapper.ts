import { PricingDto } from "../dtos/readServices/referenceDataDtos";
import { 
  Pricing,
  Agent 
} from "../models/";

class PricingMapper {

  map(dto: PricingDto, agents: Agent[]): Pricing {
    return new Pricing(
      dto.Agents ? agents.filter(agent => dto.Agents.includes(agent.id)) : [],
      dto.QuoteAgeInMinutes,
      dto.Price
    );
  }
}
export default PricingMapper;