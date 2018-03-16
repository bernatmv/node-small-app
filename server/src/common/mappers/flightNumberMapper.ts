import { FlightNumberDto } from "../dtos/readServices/referenceDataDtos";
import { 
  FlightNumber,
  Carrier 
} from "../models/";

class FlightNumberMapper {

  map(dto: FlightNumberDto, carriers: Carrier[]): FlightNumber {
    return new FlightNumber(
      dto.FlightNumber,
      carriers.find(el => el.id === dto.CarrierId)
    );
  }
}
export default FlightNumberMapper;