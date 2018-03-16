export default class GetFlightLivePricesRequest {
  constructor(
    public country: string,
    public currency: string,
    public locale: string,
    public originPlace: string,
    public destinationPlace: string,
    public outboundDate: string,
    public adults: string,
    public children?: string,
    public infants?: string,
    public inboundDate?: string,
    public cabinClass?: string,
    public includeCarriers?: string,
    public excludeCarriers?: string
  ) {}
}