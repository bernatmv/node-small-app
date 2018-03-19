import { GetFlightLivePricesRequestDto, GetFlightLivePricesResponseDto } from "../dtos/readServices/referenceDataDtos";
import PartnerClientInterface from "./partnerClientInterface";
import * as livePricing from "./live-pricing.js";

/**
 * This is mainly a wrapper on the provided client so that we have typed input and output
 * If the client were not provided, here we would implement the transport
 */
class PartnerClientImpl implements PartnerClientInterface {
  getLiveFlightPricing(request: GetFlightLivePricesRequestDto): Promise<GetFlightLivePricesResponseDto> {
    return livePricing.search({
      adults: request.adults,
      class: request.cabinClass ? request.cabinClass : null,
      toPlace: request.destinationPlace,
      toDate: request.inboundDate ? request.inboundDate : null,
      fromPlace: request.originPlace,
      fromDate: request.outboundDate
    });
  }
}
export default PartnerClientImpl;