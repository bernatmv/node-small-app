import { FlightNumberDto } from "../dtos/readServices/referenceDataDtos";
import { FlightNumber } from "../models/";
import ReferenceDataStore from "../referenceData/referenceDataStore";

class FlightNumberMapper {

  constructor(
    private _referenceData: ReferenceDataStore
  ) {}

  map(dto: FlightNumberDto): FlightNumber {
    return new FlightNumber(
      dto.FlightNumber,
      this._referenceData.carriers.get(dto.CarrierId)
    );
  }
}
export default FlightNumberMapper;