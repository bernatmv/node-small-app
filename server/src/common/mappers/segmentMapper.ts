import { SegmentDto } from "../dtos/readServices/referenceDataDtos";
import { 
  Segment, 
  Carrier, 
  FlightNumber, 
  Place 
} from "../models/";

class SegmentMapper {

  map(
    dto: SegmentDto, 
    carriers: Carrier[], 
    places: Place[], 
    flightNumbers: FlightNumber[]
  ): Segment {
    return new Segment(
      dto.Id,
      places.find(el => el.id === dto.OriginStation),
      places.find(el => el.id === dto.DestinationStation),
      dto.Departure ? new Date(dto.Departure) : null,
      dto.Arrival ? new Date(dto.Arrival) : null,
      carriers.find(el => el.id === dto.Carrier),
      carriers.find(el => el.id === dto.OperatingCarrier),
      dto.Duration,
      flightNumbers.find(el => el.flightNumber === dto.FlightNumber),
      dto.JourneyMode,
      dto.Directionality
    );
  }
}
export default SegmentMapper;