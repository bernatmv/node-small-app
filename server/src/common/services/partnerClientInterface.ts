import { GetFlightLivePricesResponseDto } from "../dtos/readServices/referenceDataDtos";

interface PartnerClientInterface {
  getLiveFlightPricing(request: any): Promise<GetFlightLivePricesResponseDto>;
}
export default PartnerClientInterface;