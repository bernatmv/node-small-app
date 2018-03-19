import { Agent, Carrier, Currency, FlightNumber, Place, Segment } from "../models";

class ReferenceDataStore {
  public agents: Map<number, Agent>;
  public carriers: Map<number, Carrier>;
  public currencies: Map<string, Currency>;
  public flightNumbers: Map<string, FlightNumber>;
  public places: Map<number, Place>;

  private static _instance: ReferenceDataStore;

  public static get instance() {
    if (!ReferenceDataStore._instance) {
      ReferenceDataStore._instance = new ReferenceDataStore();
    }
    return ReferenceDataStore._instance;
  }

  constructor() {
    this.agents = new Map<number, Agent>();
    this.carriers = new Map<number, Carrier>();
    this.currencies = new Map<string, Currency>();
    this.flightNumbers = new Map<string, FlightNumber>();
    this.places = new Map<number, Place>();
  }
}
export default ReferenceDataStore;