import LivePricingContainerModel from "./livePricing/livePricingContainerModel";
import FlightLivePricesServiceImpl from "./livePricing/services/flightLivePricesServiceImpl";
import PartnerClientImpl from "../common/services/partnerClientImpl";
import GetFlightLivePricesResponseMapper from "./livePricing/mappers/getFlightLivePricesResponseMapper";
import ReferenceDataStore from "../common/referenceData/referenceDataStore";
import { 
  AgentMapper,
  CarrierMapper,
  PlaceMapper,
  CurrencyMapper,
  SegmentMapper,
  LegMapper,
  ItineraryMapper,
  FlightNumberMapper,
  PricingMapper
} from "../common/mappers";

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

const getFlightLivePricesResponseMapper 
      = new GetFlightLivePricesResponseMapper(referenceData, agentMapper, carrierMapper, placeMapper, currencyMapper, segmentMapper, legMapper, itineraryMapper);

const client = new PartnerClientImpl();
const flightLivePricesService = new FlightLivePricesServiceImpl(client, getFlightLivePricesResponseMapper);

const livePricing = new LivePricingContainerModel(flightLivePricesService);

const api = {
  livePricing
};

export default api;
