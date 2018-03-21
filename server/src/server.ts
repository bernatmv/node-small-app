import api from "./api";
/* tslint:disable */

require("isomorphic-fetch");
require("es6-promise").polyfill();

const express = require("express");
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/api/search", (req, res) => {
  console.log('Received new request');
  api.livePricing
    .getLivePrices(req.query)
    .then((results) => {
      console.log("Sending result to the client");
      res.json(results);
    })
    .catch(console.error);
});

app.listen(4000, () => {
  console.log("Node server listening on http://localhost:4000");
});
