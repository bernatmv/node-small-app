import api from "../system";

describe("Live Pricing API", () => {

  describe("When we make a valid request to the API", () => {
    let response = null;

    beforeEach(async () => {
      //http://localhost:4000/api/search?fromPlace=EDI&toPlace=LOND&fromDate=2018-03-26&toDate=2018-03-27&adults=1&class=Economy
      response = await api.livePricing.getLivePrices({
        fromPlace: "EDI",
        toPlace: "LOND",
        fromDate: "2018-03-26",
        toDate: "2018-03-27",
        adults: 1,
        class: "Economy"
      });
    });

    it("Should return something", async () => {
      expect(response).not.toBeNull;
    });

    it("Should have some itineraries", () => {
      expect(response.itineraries.length).toBeGreaterThan(0);
    });

    it("Should have some prices in all itineraries", () => {
      expect(
        response.itineraries
                .map(el => el.prices.length > 0)
                .reduce((prev, curr) => prev && curr, true)
      ).toBe(true);
    });

    it("Should have prices with values", () => {
      expect(
        response.itineraries
                .map(el => el.prices.reduce((prev, curr) => prev && !!curr.agent && !!curr.price, true))
                .reduce((prev, curr) => prev && curr, true)
      ).toBe(true);
    });

    it("Should have prices with the correct type", () => {
      expect(
        response.itineraries
                .map(el => el.prices.reduce((prev, curr) => prev && typeof curr.agent === "string" && typeof curr.price === "number", true))
                .reduce((prev, curr) => prev && curr, true)
      ).toBe(true);
    });

    it("Should have positive prices", () => {
      expect(
        response.itineraries
                .map(el => el.prices.reduce((prev, curr) => prev && curr.price > 0, true))
                .reduce((prev, curr) => prev && curr, true)
      ).toBe(true);
    });

    it("Should have legs in all itineraries", () => {
      expect(
        response.itineraries
                .map(el => !!el.outboundLeg && !!el.inboundLeg)
                .reduce((prev, curr) => prev && curr, true)
      ).toBe(true);
    });

    it("Should have legs with valid direction", () => {
      expect(response.itineraries.reduce((prev, curr) => prev && curr.outboundLeg.directionality === "Outbound", true)).toBe(true);
      expect(response.itineraries.reduce((prev, curr) => prev && curr.inboundLeg.directionality === "Inbound", true)).toBe(true);
    });  

    it("Should have legs with segments", () => {
      expect(response.itineraries.reduce((prev, curr) => prev && curr.outboundLeg.segments.length > 0, true)).toBe(true);
      expect(response.itineraries.reduce((prev, curr) => prev && curr.inboundLeg.segments.length > 0, true)).toBe(true);
    });  

    it("Should have segments with values", () => {
      expect(
        response.itineraries
                .map(el => 
                        el.outboundLeg.segments.reduce((prev, curr) => 
                            prev 
                            && !!curr.carrier 
                            && !!curr.from
                            && !!curr.to
                            && !!curr.departure
                            && !!curr.arrival
                            && !!curr.duration
                          , true)
                        && el.inboundLeg.segments.reduce((prev, curr) => 
                          prev 
                          && !!curr.carrier 
                          && !!curr.from
                          && !!curr.to
                          && !!curr.departure
                          && !!curr.arrival
                          && !!curr.duration
                        , true)
                    )
              .reduce((prev, curr) => prev && curr, true)
      ).toBe(true);
    });

    it("Should have segments with the correct type", () => {
      expect(
        response.itineraries
                .map(el => 
                        el.outboundLeg.segments.reduce((prev, curr) => 
                            prev 
                            && typeof curr.carrier  === "string"
                            && typeof curr.from === "string"
                            && typeof curr.to === "string"
                            && typeof curr.departure === "string"
                            && typeof curr.arrival === "string"
                            && typeof curr.duration === "number"
                          , true)
                        && el.inboundLeg.segments.reduce((prev, curr) => 
                          prev 
                          && typeof curr.carrier  === "string"
                          && typeof curr.from === "string"
                          && typeof curr.to === "string"
                          && typeof curr.departure === "string"
                          && typeof curr.arrival === "string"
                          && typeof curr.duration === "number"
                        , true)
                    )
              .reduce((prev, curr) => prev && curr, true)
      ).toBe(true);
    });
  });
});
