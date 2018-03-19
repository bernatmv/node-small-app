import {
  FlightNumber,
  Segment,
  Carrier,
  Place
} from "./";

export default class Leg {
  constructor(
    public id: string,
    public segments: Segment[],
    public originStation: Place,
    public destinationStation: Place,
    public departure: Date,
    public arrival: Date,
    public duration: number,
    public journeyMode: string,
    public stops: Place[],
    public carriers: Carrier[],
    public operatingCarriers: Carrier[],
    public directionality: string,
    public flightNumbers: FlightNumber[]
  ) {}
}
