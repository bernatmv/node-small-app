import LivePriceModel from "./model/livePriceModel";
import GetFlightLivePricesRequest from "./model/getFlightLivePricesRequest";
import FlightLivePricesServiceInterface from "./services/flightLivePricesServiceInterface";
import FlightLivePricesInput from "./model/flightLivePricesInput";

class LivePricingContainerModel {

  constructor(
    private _flightLivePricesService: FlightLivePricesServiceInterface
  ) {}

  async getLivePrices(input: FlightLivePricesInput): Promise<LivePriceModel> {
    //http://localhost:4000/api/search?fromPlace=EDI&toPlace=LOND&fromDate=2018-03-26&toDate=2018-03-27&adults=1&class=Economy
    return await this._flightLivePricesService.getPricing(new GetFlightLivePricesRequest(
      input.fromPlace, //"EDI"
      input.toPlace, //"LOND"
      input.fromDate, //next monday
      input.toDate, //next monday+1
      input.adults, //1
      input.class //Economy
    ));
  }
}
export default LivePricingContainerModel;
