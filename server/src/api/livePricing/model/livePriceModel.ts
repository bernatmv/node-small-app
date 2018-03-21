import { Currency, Itinerary } from "../../../common/models";

export default class LivePriceModel {
  constructor(
    public itineraries: Itinerary[],
    public currency: Currency
  ) {}
}