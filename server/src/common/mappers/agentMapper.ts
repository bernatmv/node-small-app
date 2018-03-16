import { AgentDto } from "../dtos/readServices/referenceDataDtos";
import { Agent } from "../models/";

class AgentMapper {

  map(dto: AgentDto): Agent {
    return new Agent(
      dto.Id,
      dto.Name,
      dto.ImageUrl,
      dto.Type
    );
  }
}
export default AgentMapper;
