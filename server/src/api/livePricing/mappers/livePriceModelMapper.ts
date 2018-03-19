import LivePriceModel from "../model/livePriceModel";
import FightLivePricesOutput from "../model/flightLivePricesOutput";

class LivePriceModelMapper {

  toDto(model: LivePriceModel): FightLivePricesOutput {
    return {
      itineraries: model.itineraries.map(itinerary => ({
        outboundLeg: {
          segments: itinerary.outboundLeg.segments.map(segment =>({
            carrier: segment.carrier.code,
            from: segment.originStation.code,
            to: segment.destinationStation.code,
            departure: segment.departure,
            arrival: segment.arrival,
            duration: segment.duration
          }))
          directionality: itinerary.outboundLeg.directionality
        },
        inboundLeg: {
          segments: itinerary.inboundLeg.segments.map(segment =>({
            carrier: segment.carrier.code,
            from: segment.originStation.code,
            to: segment.destinationStation.code,
            departure: segment.departure,
            arrival: segment.arrival,
            duration: segment.duration
          }))
          directionality: itinerary.inboundLeg.directionality
        },
        prices: itinerary.pricingOptions.map(price => ({
          agent: price.agents.length > 0 ? price.agents[0].name : "",
          price: price.price
        }))
      }))
    };
  }
}
export default LivePriceModelMapper;