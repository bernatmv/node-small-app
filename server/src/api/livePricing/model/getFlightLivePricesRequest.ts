export default class GetFlightLivePricesRequest {
  constructor(
    public originPlace: string,
    public destinationPlace: string,
    public outboundDate: string,
    public inboundDate: string,
    public adults: number,
    public cabinClass: string
  ) {}
}