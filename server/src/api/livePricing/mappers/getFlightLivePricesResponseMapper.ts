import { GetFlightLivePricesResponseDto } from "../../../common/dtos/readServices/referenceDataDtos";
import { AgentMapper, CarrierMapper, CurrencyMapper, PlaceMapper, SegmentMapper, LegMapper, ItineraryMapper } from "../../../common/mappers";
import LivePriceModel from "../model/livePriceModel";
import ReferenceDataStore from "../../../common/referenceData/referenceDataStore";

class GetFlightLivePricesResponseMapper {
  constructor(
    private _referenceData: ReferenceDataStore,
    private _agentMapper: AgentMapper,
    private _carrierMapper: CarrierMapper,
    private _placeMapper: PlaceMapper,
    private _currencyMapper: CurrencyMapper,
    private _segmentMapper: SegmentMapper,
    private _legMapper: LegMapper,
    private _itineraryMapper: ItineraryMapper
  ) {}

  /**
   * We will first fill all the reference data:
   * - Agents
   * - Carriers
   * - Places
   * - Currencies
   * Then we will process the other information in the appropiate order (childs first)
   * - Segments
   * - Legs
   * Finally the top-most elements:
   * - itineraries
   */
  map(dto: GetFlightLivePricesResponseDto): LivePriceModel {
    // fill reference data
    dto.Agents.map(el => this._referenceData.agents.set(el.Id, this._agentMapper.map(el)));
    dto.Carriers.map(el => this._referenceData.carriers.set(el.Id, this._carrierMapper.map(el)));
    dto.Places.map(el => this._referenceData.places.set(el.Id, this._placeMapper.map(el)));
    dto.Currencies.map(el => this._referenceData.currencies.set(el.Code, this._currencyMapper.map(el)));
    // generate segments, legs and (finally) itineraries
    const segments = dto.Segments.map(el => this._segmentMapper.map(el));
    const legs = dto.Legs.map(el => this._legMapper.map(el, segments));
    const itineraries = dto.Itineraries.map(el => this._itineraryMapper.map(el, legs));
    // create entity
    return new LivePriceModel(itineraries, legs, segments);
  }
}
export default GetFlightLivePricesResponseMapper;