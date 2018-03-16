import GetFlightLivePricesRequest from "../model/getFlightLivePricesRequest";
import LivePriceModel from "../model/livePriceModel";

interface FlightLivePricesServiceInterface {
  getPricing(request: GetFlightLivePricesRequest): Promise<LivePriceModel>;
}
export default FlightLivePricesServiceInterface;
