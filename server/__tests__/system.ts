import LivePricingContainerModel from "../server/src/api/livePricing/livePricingContainerModel";
import FlightLivePricesServiceImpl from "../server/src/api/livePricing/services/flightLivePricesServiceImpl";
import GetFlightLivePricesResponseMapper from "../server/src/api/livePricing/mappers/getFlightLivePricesResponseMapper";
import ReferenceDataStore from "../server/src/common/referenceData/referenceDataStore";
import { 
  AgentMapper, CarrierMapper, PlaceMapper, CurrencyMapper, SegmentMapper, LegMapper, ItineraryMapper, FlightNumberMapper, PricingMapper 
} from "../server/src/common/mappers";
import LivePriceModelMapper from "../server/src/api/livePricing/mappers/livePriceModelMapper";
import PartnerClientStub from "./stubs/clientStub";

// This would be better with a dependency injection container on a module/mapper class where we can define dependencies as transient or once-instanced
const referenceData = new ReferenceDataStore();

const flightNumberMapper = new FlightNumberMapper(referenceData);
const pricingMapper = new PricingMapper(referenceData);
const agentMapper = new AgentMapper();
const carrierMapper = new CarrierMapper();
const placeMapper = new PlaceMapper();
const currencyMapper = new CurrencyMapper();
const segmentMapper = new SegmentMapper(referenceData);
const legMapper = new LegMapper(referenceData, flightNumberMapper);
const itineraryMapper = new ItineraryMapper(pricingMapper);
const livePriceModelMapper = new LivePriceModelMapper();

const getFlightLivePricesResponseMapper 
      = new GetFlightLivePricesResponseMapper(referenceData, agentMapper, carrierMapper, placeMapper, currencyMapper, segmentMapper, legMapper, itineraryMapper);

const clientStub = new PartnerClientStub();
const flightLivePricesService = new FlightLivePricesServiceImpl(clientStub, getFlightLivePricesResponseMapper);

const livePricing = new LivePricingContainerModel(flightLivePricesService, livePriceModelMapper);

const api = {
  livePricing
};

export default api;