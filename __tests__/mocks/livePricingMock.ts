const response = {
  "SessionKey": "c6fde00800c5487b8cd95c0d991d58bb_rrsqbjcb_cd8283034710069eed7028483edbcb3e",
  "Query": {
    "Country": "GB",
    "Currency": "GBP",
    "Locale": "en-gb",
    "Adults": 1,
    "Children": 0,
    "Infants": 0,
    "OriginPlace": "11235",
    "DestinationPlace": "4698",
    "OutboundDate": "2018-03-26",
    "InboundDate": "2018-03-27",
    "LocationSchema": "Default",
    "CabinClass": "Economy",
    "GroupPricing": false
  },
  "Status": "UpdatesComplete",
  "Itineraries": [{
    "OutboundLegId": "11235-1803261040--31915-0-16574-1803261205",
    "InboundLegId": "16574-1803271230--31915-0-11235-1803271350",
    "PricingOptions": [{
      "Agents": [3855438],
      "QuoteAgeInMinutes": 59,
      "Price": 29.27,
      "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd"
    }],
    "BookingDetailsLink": {
      "Uri": "/apiservices/pricing/v1.0/c6fde00800c5487b8cd95c0d991d58bb_rrsqbjcb_cd8283034710069eed7028483edbcb3e/booking",
      "Body": "OutboundLegId=11235-1803261040--31915-0-16574-1803261205&InboundLegId=16574-1803271230--31915-0-11235-1803271350",
      "Method": "PUT"
    }
  }],
  "Legs": [{
    "Id": "11235-1803261040--31915-0-16574-1803261205",
    "SegmentIds": [0],
    "OriginStation": 11235,
    "DestinationStation": 13465,
    "Departure": "2018-03-26T19:00:00",
    "Arrival": "2018-03-26T20:30:00",
    "Duration": 90,
    "JourneyMode": "Flight",
    "Stops": [],
    "Carriers": [881],
    "OperatingCarriers": [938],
    "Directionality": "Outbound",
    "FlightNumbers": [{
      "FlightNumber": "8717",
      "CarrierId": 881
    }]
  }, {
    "Id": "16574-1803271230--31915-0-11235-1803271350",
    "SegmentIds": [1],
    "OriginStation": 13465,
    "DestinationStation": 11235,
    "Departure": "2018-03-27T18:00:00",
    "Arrival": "2018-03-27T19:30:00",
    "Duration": 90,
    "JourneyMode": "Flight",
    "Stops": [],
    "Carriers": [885],
    "OperatingCarriers": [885],
    "Directionality": "Inbound",
    "FlightNumbers": [{
      "FlightNumber": "8709",
      "CarrierId": 881
    }]
  }],
  "Segments": [{
    "Id": 0,
    "OriginStation": 11235,
    "DestinationStation": 13465,
    "DepartureDateTime": "2018-03-26T19:00:00",
    "ArrivalDateTime": "2018-03-26T20:30:00",
    "Carrier": 881,
    "OperatingCarrier": 938,
    "Duration": 90,
    "FlightNumber": "8717",
    "JourneyMode": "Flight",
    "Directionality": "Outbound"
  }, {
    "Id": 1,
    "OriginStation": 13465,
    "DestinationStation": 11235,
    "DepartureDateTime": "2018-03-27T18:00:00",
    "ArrivalDateTime": "2018-03-27T19:30:00",
    "Carrier": 885,
    "OperatingCarrier": 885,
    "Duration": 90,
    "FlightNumber": "8709",
    "JourneyMode": "Flight",
    "Directionality": "Inbound"
  }],
  "Carriers": [{
    "Id": 881,
    "Code": "BA",
    "Name": "British Airways",
    "ImageUrl": "http://s1.apideeplink.com/images/airlines/BA.png",
    "DisplayCode": "BA"
  }, {
    "Id": 938,
    "Code": "CJ",
    "Name": "BA Cityflyer",
    "ImageUrl": "http://s1.apideeplink.com/images/airlines/CJ.png",
    "DisplayCode": "CJ"
  }, {
    "Id": 885,
    "Code": "BE",
    "Name": "Flybe",
    "ImageUrl": "http://s1.apideeplink.com/images/airlines/BE.png",
    "DisplayCode": "BE"
  }, {
    "Id": 1050,
    "Code": "U2",
    "Name": "easyJet",
    "ImageUrl": "http://s1.apideeplink.com/images/airlines/EZ.png",
    "DisplayCode": "EZY"
  }, {
    "Id": 1090,
    "Code": "FR",
    "Name": "Ryanair",
    "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
    "DisplayCode": "FR"
  }],
  "Agents": [{
    "Id": 1963108,
    "Name": "Mytrip",
    "ImageUrl": "http://s1.apideeplink.com/images/websites/at24.png",
    "Status": "UpdatesComplete",
    "OptimisedForMobile": true,
    "BookingNumber": "+448447747881",
    "Type": "TravelAgent"
  }, {
    "Id": 2365707,
    "Name": "ebookers",
    "ImageUrl": "http://s1.apideeplink.com/images/websites/ebuk.png",
    "Status": "UpdatesComplete",
    "OptimisedForMobile": true,
    "Type": "TravelAgent"
  }, {
    "Id": 3503883,
    "Name": "Opodo",
    "ImageUrl": "http://s1.apideeplink.com/images/websites/opuk.png",
    "Status": "UpdatesComplete",
    "OptimisedForMobile": true,
    "Type": "TravelAgent"
  }, {
    "Id": 4499211,
    "Name": "Expedia",
    "ImageUrl": "http://s1.apideeplink.com/images/websites/xpuk.png",
    "Status": "UpdatesComplete",
    "OptimisedForMobile": true,
    "Type": "TravelAgent"
  }, {
    "Id": 2370315,
    "Name": "eDreams",
    "ImageUrl": "http://s1.apideeplink.com/images/websites/eduk.png",
    "Status": "UpdatesComplete",
    "OptimisedForMobile": true,
    "Type": "TravelAgent"
  }, {
    "Id": 3579051,
    "Name": "Travelpack",
    "ImageUrl": "http://s1.apideeplink.com/images/websites/pack.png",
    "Status": "UpdatesComplete",
    "OptimisedForMobile": true,
    "BookingNumber": "+442085854043",
    "Type": "TravelAgent"
  }, {
    "Id": 2043147,
    "Name": "Bravofly",
    "ImageUrl": "http://s1.apideeplink.com/images/websites/bfuk.png",
    "Status": "UpdatesComplete",
    "OptimisedForMobile": true,
    "BookingNumber": "0203 499 5179",
    "Type": "TravelAgent"
  }, {
    "Id": 3165195,
    "Name": "lastminute.com",
    "ImageUrl": "http://s1.apideeplink.com/images/websites/lmuk.png",
    "Status": "UpdatesComplete",
    "OptimisedForMobile": true,
    "Type": "TravelAgent"
  }, {
    "Id": 4056843,
    "Name": "Tripsta",
    "ImageUrl": "http://s1.apideeplink.com/images/websites/tpuk.png",
    "Status": "UpdatesComplete",
    "OptimisedForMobile": true,
    "Type": "TravelAgent"
  }, {
    "Id": 3874827,
    "Name": "BudgetAir",
    "ImageUrl": "http://s1.apideeplink.com/images/websites/s1uk.png",
    "Status": "UpdatesComplete",
    "OptimisedForMobile": true,
    "Type": "TravelAgent"
  }, {
    "Id": 2628363,
    "Name": "GotoGate",
    "ImageUrl": "http://s1.apideeplink.com/images/websites/gtuk.png",
    "Status": "UpdatesComplete",
    "OptimisedForMobile": true,
    "Type": "TravelAgent"
  }, {
    "Id": 3934928,
    "Name": "Kiwi.com",
    "ImageUrl": "http://s1.apideeplink.com/images/websites/skyp.png",
    "Status": "UpdatesComplete",
    "OptimisedForMobile": true,
    "Type": "TravelAgent"
  }, {
    "Id": 1887169,
    "Name": "telme",
    "ImageUrl": "http://s1.apideeplink.com/images/websites/a341.png",
    "Status": "UpdatesComplete",
    "OptimisedForMobile": false,
    "Type": "TravelAgent"
  }, {
    "Id": 2185995,
    "Name": "Trip.com",
    "ImageUrl": "http://s1.apideeplink.com/images/websites/ctuk.png",
    "Status": "UpdatesComplete",
    "OptimisedForMobile": true,
    "Type": "TravelAgent"
  }, {
    "Id": 1939318,
    "Name": "Air France",
    "ImageUrl": "http://s1.apideeplink.com/images/websites/airf.png",
    "Status": "UpdatesComplete",
    "OptimisedForMobile": true,
    "BookingNumber": "08716633777",
    "Type": "Airline"
  }, {
    "Id": 2499522,
    "Name": "flybe",
    "ImageUrl": "http://s1.apideeplink.com/images/websites/flyb.png",
    "Status": "UpdatesComplete",
    "OptimisedForMobile": false,
    "BookingNumber": "+448717002000",
    "Type": "Airline"
  }, {
    "Id": 2032127,
    "Name": "British Airways",
    "ImageUrl": "http://s1.apideeplink.com/images/websites/ba__.png",
    "Status": "UpdatesComplete",
    "OptimisedForMobile": true,
    "BookingNumber": "08444930787",
    "Type": "Airline"
  }, {
    "Id": 3051889,
    "Name": "KLM",
    "ImageUrl": "http://s1.apideeplink.com/images/websites/klm1.png",
    "Status": "UpdatesComplete",
    "OptimisedForMobile": true,
    "BookingNumber": "+448712310000",
    "Type": "Airline"
  }, {
    "Id": 3182916,
    "Name": "Lufthansa",
    "ImageUrl": "http://s1.apideeplink.com/images/websites/luft.png",
    "Status": "UpdatesComplete",
    "OptimisedForMobile": true,
    "BookingNumber": "+448719459747",
    "Type": "Airline"
  }, {
    "Id": 2363321,
    "Name": "easyJet",
    "ImageUrl": "http://s1.apideeplink.com/images/websites/easy.png",
    "Status": "UpdatesComplete",
    "OptimisedForMobile": true,
    "BookingNumber": "08431045000",
    "Type": "Airline"
  }, {
    "Id": 3855438,
    "Name": "Ryanair",
    "ImageUrl": "http://s1.apideeplink.com/images/websites/ryan.png",
    "Status": "UpdatesComplete",
    "OptimisedForMobile": true,
    "BookingNumber": "08712460000",
    "Type": "Airline"
  }, {
    "Id": 2409351,
    "Name": "eurowings",
    "ImageUrl": "http://s1.apideeplink.com/images/websites/eurw.png",
    "Status": "UpdatesComplete",
    "OptimisedForMobile": true,
    "BookingNumber": "00491805805805",
    "Type": "Airline"
  }, {
    "Id": 4288780,
    "Name": "Vueling Airlines",
    "ImageUrl": "http://s1.apideeplink.com/images/websites/vuel.png",
    "Status": "UpdatesComplete",
    "OptimisedForMobile": true,
    "BookingNumber": "09067547541",
    "Type": "Airline"
  }],
  "Places": [{
    "Id": 11235,
    "ParentId": 2343,
    "Code": "EDI",
    "Type": "Airport",
    "Name": "Edinburgh"
  }, {
    "Id": 13465,
    "ParentId": 4698,
    "Code": "LCY",
    "Type": "Airport",
    "Name": "London City"
  }, {
    "Id": 13554,
    "ParentId": 4698,
    "Code": "LHR",
    "Type": "Airport",
    "Name": "London Heathrow"
  }, {
    "Id": 13542,
    "ParentId": 4698,
    "Code": "LGW",
    "Type": "Airport",
    "Name": "London Gatwick"
  }, {
    "Id": 13771,
    "ParentId": 4698,
    "Code": "LTN",
    "Type": "Airport",
    "Name": "London Luton"
  }, {
    "Id": 16574,
    "ParentId": 4698,
    "Code": "STN",
    "Type": "Airport",
    "Name": "London Stansted"
  }, {
    "Id": 2343,
    "ParentId": 247,
    "Code": "EDI",
    "Type": "City",
    "Name": "Edinburgh"
  }, {
    "Id": 4698,
    "ParentId": 247,
    "Code": "LON",
    "Type": "City",
    "Name": "London"
  }, {
    "Id": 247,
    "Code": "GB",
    "Type": "Country",
    "Name": "United Kingdom"
  }],
  "Currencies": [{
    "Code": "GBP",
    "Symbol": "£",
    "ThousandsSeparator": ",",
    "DecimalSeparator": ".",
    "SymbolOnLeft": true,
    "SpaceBetweenAmountAndSymbol": false,
    "RoundingCoefficient": 0,
    "DecimalDigits": 2
  }],
  "ServiceQuery": {
    "DateTime": "2018-03-20T09:17:53.3833071Z"
  }
};
export default response;
