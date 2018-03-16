import { CarrierDto } from "../dtos/readServices/referenceDataDtos";
import { Carrier } from "../models/";

class CarrierMapper {

  map(dto: CarrierDto): Carrier {
    return new Carrier(
      dto.Id,
      dto.Code,
      dto.Name,
      dto.ImageUrl,
      dto.DisplayCode
    );
  }
}
export default CarrierMapper;