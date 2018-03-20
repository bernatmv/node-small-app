import GetFlightLivePricesRequest from "./model/getFlightLivePricesRequest";
import FlightLivePricesServiceInterface from "./services/flightLivePricesServiceInterface";
import FlightLivePricesInput from "./model/flightLivePricesInput";
import LivePriceModelMapper from "./mappers/livePriceModelMapper";
import FightLivePricesOutput from "./model/flightLivePricesOutput";

class LivePricingContainerModel {

  constructor(
    private _flightLivePricesService: FlightLivePricesServiceInterface,
    private _livePriceModelMapper: LivePriceModelMapper
  ) {}

  async getLivePrices(input: FlightLivePricesInput): Promise<FightLivePricesOutput> {
    //http://localhost:4000/api/search?fromPlace=EDI&toPlace=LOND&fromDate=2018-03-26&toDate=2018-03-27&adults=1&class=Economy
    let livePrice = await this._flightLivePricesService.getPricing(new GetFlightLivePricesRequest(
      input.fromPlace, //"EDI"
      input.toPlace, //"LOND"
      input.fromDate, //next monday
      input.toDate, //next monday+1
      input.adults, //1
      input.class //Economy
    ));
    return this._livePriceModelMapper.toDto(livePrice);
  }
}
export default LivePricingContainerModel;
