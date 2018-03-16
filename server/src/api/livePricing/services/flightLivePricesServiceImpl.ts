import FlightLivePricesServiceInterface from './flightLivePricesServiceInterface';
import GetFlightLivePricesRequest from '../model/getFlightLivePricesRequest';
import LivePriceModel from '../model/livePriceModel';

class FlightLivePricesServiceImpl implements FlightLivePricesServiceInterface {

  constructor(
    private _skyscannerClient: SkyscannerClientInterface,
    private _getFlightLivePricesResponseMapper: GetFlightLivePricesResponseMapper
  ) {}

  async getPricing(request: GetFlightLivePricesRequest): Promise<LivePriceModel> {
    return new Promise<LivePriceModel>((resolve) => {
      this._skyscannerClient.getDeveloper(new GetFlightLivePricesRequestDto(request.id))
        .then((dto) => {
          resolve(this._getFlightLivePricesResponseMapper.map(dto));
        })
        .catch(console.error);
    });
  }
}
export default FlightLivePricesServiceImpl;