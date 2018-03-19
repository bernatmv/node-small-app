import { 
  Itinerary, 
  Leg,
  Segment
} from "../../../common/models";

export default class LivePriceModel {
  constructor(
    public itineraries: Itinerary[],
    public legs: Leg[],
    public segments: Segment[]
  ) {}
}