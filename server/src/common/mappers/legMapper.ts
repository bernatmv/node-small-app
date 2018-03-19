import { LegDto } from "../dtos/readServices/referenceDataDtos";
import { Leg } from "../models/";
import { FlightNumberMapper } from "./";
import ReferenceDataStore from "../referenceData/referenceDataStore";

class LegMapper {

  constructor(
    private _referenceData: ReferenceDataStore,
    private _flightNumberMapper: FlightNumberMapper
  ) {}

  map(dto: LegDto, segments): Leg {
    return new Leg(
      dto.Id,
      segments.filter(segment => dto.SegmentIds.includes(segment.id)),
      this._referenceData.places.get(dto.OriginStation),
      this._referenceData.places.get(dto.DestinationStation),
      dto.Departure ? new Date(dto.Departure) : null,
      dto.Arrival ? new Date(dto.Arrival) : null,
      dto.Duration,
      dto.JourneyMode,
      dto.Stops.map(id => this._referenceData.places.get(id)),
      dto.Carriers.map(id => this._referenceData.carriers.get(id)),
      dto.OperatingCarriers.map(id => this._referenceData.carriers.get(id)),
      dto.Directionality,
      dto.FlightNumbers.map(el => {
        // this component should not be owning this, but we do it like this due to how the response is structured
        const flight = this._flightNumberMapper.map(el);
        this._referenceData.flightNumbers.set(flight.flightNumber, flight);
        return flight;
      })
    );
  }
}
export default LegMapper;