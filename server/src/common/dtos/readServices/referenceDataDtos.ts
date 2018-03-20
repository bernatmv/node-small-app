export interface GetFlightLivePricesRequestDto {
  country: string;
  currency: string;
  locale: string;
  originPlace: string;
  destinationPlace: string;
  outboundDate: string;
  inboundDate?: string;
  cabinClass?: string;
  adults: string;
  children?: string;
  infants?: string;
  includeCarriers?: string;
  excludeCarriers?: string;
}

export interface GetFlightLivePricesResponseDto {
  Status: "UpdatesPending" | "UpdatesComplete";
  Itineraries: ItineraryDto[];
  Legs: LegDto[];
  Segments: SegmentDto[];
  Carriers: CarrierDto[];
  Agents: AgentDto[];
  Places: PlaceDto[];
  Currencies: CurrencyDto[];
}

export interface ItineraryDto {
  OutboundLegId: string;
  InboundLegId: string;
  PricingOptions: PricingDto[];
}

export interface PricingDto {
  Agents: number[];
  QuoteAgeInMinutes: number;
  Price: number;
}

export interface LegDto {
  Id: string;
  SegmentIds: number[];
  OriginStation: number;
  DestinationStation: number;
  Departure: string;
  Arrival: string;
  Duration: number;
  JourneyMode: string;
  Stops: number[];
  Carriers: number[];
  OperatingCarriers: number[];
  Directionality: string;
  FlightNumbers: FlightNumberDto[];
}

export interface FlightNumberDto {
  FlightNumber: string;
  CarrierId: number;
}

export interface SegmentDto {
  Id: number;
  OriginStation: number;
  DestinationStation: number;
  DepartureDateTime: string;
  ArrivalDateTime: string;
  Carrier: number;
  OperatingCarrier: number;
  Duration: number;
  FlightNumber: string;
  JourneyMode: string;
  Directionality: string;
}

export interface CarrierDto {
  Id: number;
  Code: string;
  Name: string;
  ImageUrl: string;
  DisplayCode: string;
}

export interface AgentDto {
  Id: number;
  Name: string;
  ImageUrl: string;
  Type: string;
}

export interface PlaceDto {
  Id: number;
  ParentId: number;
  Code: string;
  Type: string;
  Name: string;
}

export interface CurrencyDto {
  Code: string;
  Symbol: string;
  ThousandsSeparator: string;
  DecimalSeparator: string;
  SymbolOnLeft: boolean;
  SpaceBetweenAmountAndSymbol: boolean;
  RoundingCoefficient: number;
  DecimalDigits: number;
}