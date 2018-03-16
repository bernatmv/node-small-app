import { Carrier } from "./";

export default class FlightNumber {
  constructor(
    public flightNumber: string,
    public carrier: Carrier
  ) {}
}
