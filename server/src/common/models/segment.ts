import {
  Carrier,
  FlightNumber,
  Place
} from "./";

export default class Segment {
  constructor(
    public id: number,
    public originStation: Place,
    public destinationStation: Place,
    public departure: Date,
    public arrival: Date,
    public carrier: Carrier,
    public operatingCarrier: Carrier,
    public duration: number,
    public flightNumber: FlightNumber,
    public journeyMode: string,
    public directionality: string
  ) {}
}
