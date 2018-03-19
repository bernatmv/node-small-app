import { GetFlightLivePricesRequestDto, GetFlightLivePricesResponseDto } from "../dtos/readServices/referenceDataDtos";

interface PartnerClientInterface {
  getLiveFlightPricing(request: GetFlightLivePricesRequestDto): Promise<GetFlightLivePricesResponseDto>;
}
export default PartnerClientInterface;