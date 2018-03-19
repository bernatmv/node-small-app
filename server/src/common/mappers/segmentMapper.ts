import { SegmentDto } from "../dtos/readServices/referenceDataDtos";
import { Segment } from "../models/";
import ReferenceDataStore from "../referenceData/referenceDataStore";

class SegmentMapper {

  constructor(
    private _referenceData: ReferenceDataStore
  ) {}

  map(
    dto: SegmentDto
  ): Segment {
    return new Segment(
      dto.Id,
      this._referenceData.places.get(dto.OriginStation),
      this._referenceData.places.get(dto.DestinationStation),
      dto.Departure ? new Date(dto.Departure) : null,
      dto.Arrival ? new Date(dto.Arrival) : null,
      this._referenceData.carriers.get(dto.Carrier),
      this._referenceData.carriers.get(dto.OperatingCarrier),
      dto.Duration,
      this._referenceData.flightNumbers.get(dto.FlightNumber),
      dto.JourneyMode,
      dto.Directionality
    );
  }
}
export default SegmentMapper;