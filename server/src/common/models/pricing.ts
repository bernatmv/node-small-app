import { Agent } from "./";

export default class Pricing {
  constructor(
    public agents: Agent[],
    public quoteAgeInMinutes: number,
    public price: number
  ) {}
}
