import { GetFlightLivePricesRequestDto, GetFlightLivePricesResponseDto } from "../../server/src/common/dtos/readServices/referenceDataDtos";
import PartnerClientInterface from "../../server/src/common/services/partnerClientInterface";
import response from "../mocks/livePricingMock";

class PartnerClientStub implements PartnerClientInterface {
  getLiveFlightPricing(request: GetFlightLivePricesRequestDto): Promise<GetFlightLivePricesResponseDto> {
    return new Promise<GetFlightLivePricesResponseDto>((resolve, reject) => {
      process.nextTick(() => resolve(response as GetFlightLivePricesResponseDto));
    });
  }
}
export default PartnerClientStub;