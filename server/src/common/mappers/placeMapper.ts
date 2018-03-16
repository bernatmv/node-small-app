import { PlaceDto } from "../dtos/readServices/referenceDataDtos";
import { Place } from "../models/";

class PlaceMapper {

  map(dto: PlaceDto): Place {
    return new Place(
      dto.Id,
      dto.ParentId,
      dto.Code,
      dto.Type,
      dto.Name
    );
  }
}
export default PlaceMapper;