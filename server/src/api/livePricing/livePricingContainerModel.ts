import ReferenceDataServiceInterface from '../../common/services/referenceDataServiceInterface';
import LivePriceModel from './model/livePriceModel';
import GetFlightLivePricesRequest from './model/getFlightLivePricesRequest';

class LivePricingContainerModel {

  constructor(
    private _referenceDataService: ReferenceDataServiceInterface,
  ) {}

  async getLivePrices(id: number): Promise<LivePriceModel> {
    const app = await this._referenceDataService.getApp(new GetFlightLivePricesRequest(id));
    return new LivePriceModel(app, developer);
  }
}
export default LivePricingContainerModel;
