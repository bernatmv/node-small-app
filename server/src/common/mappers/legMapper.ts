import { LegDto } from "../dtos/readServices/referenceDataDtos";
import { 
  Leg, 
  Segment,
  Carrier, 
  Place 
} from "../models/";
import FlightNumberMapper from "./flightNumberMapper";

class LegMapper {
  constructor(
    private _flightNumberMapper: FlightNumberMapper
  ) {}

  map(
    dto: LegDto, 
    carriers: Carrier[], 
    places: Place[], 
    segments: Segment[]
  ): Leg {
    return new Leg(
      dto.Id,
      segments.filter(segment => dto.SegmentIds.includes(segment.id)),
      places.find(el => el.id === dto.OriginStation),
      places.find(el => el.id === dto.DestinationStation),
      dto.Departure ? new Date(dto.Departure) : null,
      dto.Arrival ? new Date(dto.Arrival) : null,
      dto.Duration,
      dto.JourneyMode,
      places.filter(place => dto.Stops.includes(place.id)),
      carriers.filter(carrier => dto.Carriers.includes(carrier.id)),
      carriers.filter(carrier => dto.OperatingCarriers.includes(carrier.id)),
      dto.Directionality,
      dto.FlightNumbers.map(el => this._flightNumberMapper.map(el, carriers))
    );
  }
}
export default LegMapper;