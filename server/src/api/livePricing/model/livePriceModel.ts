import { 
  Itinerary, 
  Leg,
  Segment,
  Carrier,
  Agent,
  Place,
  Currency
} from "../../../common/models";

export default class LivePriceModel {
  constructor(
    public itineraries: Itinerary[],
    public legs: Leg[],
    public segments: Segment[],
    public carriers: Carrier[],
    public agents: Agent[],
    public places: Place[],
    public currencies: Currency[]
  ) {}
}