import { GetFlightLivePricesRequestDto } from "../../../common/dtos/readServices/referenceDataDtos";
import FlightLivePricesServiceInterface from "./flightLivePricesServiceInterface";
import GetFlightLivePricesRequest from "../model/getFlightLivePricesRequest";
import LivePriceModel from "../model/livePriceModel";
import PartnerClientInterface from "../../../common/services/partnerClientInterface";
import GetFlightLivePricesResponseMapper from "../mappers/getFlightLivePricesResponseMapper";

class FlightLivePricesServiceImpl implements FlightLivePricesServiceInterface {

  constructor(
    private _client: PartnerClientInterface,
    private _getFlightLivePricesResponseMapper: GetFlightLivePricesResponseMapper
  ) {}

  async getPricing(request: GetFlightLivePricesRequest): Promise<LivePriceModel> {
    return new Promise<LivePriceModel>((resolve) => {
      this._client.getLiveFlightPricing(request)
        .then((dto) => {
          resolve(this._getFlightLivePricesResponseMapper.map(dto));
        })
        .catch(console.error);
    });
  }
}
export default FlightLivePricesServiceImpl;