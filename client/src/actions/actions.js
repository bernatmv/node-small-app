import Constants from "../common/constants";

export function loadLivePrices(query) {
  return {
      type: Constants.Actions.LoadLivePrices,
      query
  };
}

export function displayLivePrices(data) {
  return {
      type: Constants.Actions.DisplayLivePrices,
      data
  };
}
