import LivePriceModel from "./model/livePriceModel";
import GetFlightLivePricesRequest from "./model/getFlightLivePricesRequest";
import FlightLivePricesServiceInterface from "./services/flightLivePricesServiceInterface";

class LivePricingContainerModel {

  constructor(
    private _flightLivePricesService: FlightLivePricesServiceInterface
  ) {}

  async getLivePrices(): Promise<LivePriceModel> {
    return await this._flightLivePricesService.getPricing(new GetFlightLivePricesRequest(
      "GB",
      "GBP",
      "en-gb",
      "EDI",
      "LOND",
      "2018-03-26",
      "1",
      "0",
      "0",
      "2018-03-27",
      "Economy"
    ));
  }
}
export default LivePricingContainerModel;
