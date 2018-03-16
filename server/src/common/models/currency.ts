export default class Currency {
  constructor(
    public code: string,
    public symbol: string,
    public thousandsSeparator: string,
    public decimalSeparator: string,
    public symbolOnLeft: boolean,
    public spaceBetweenAmountAndSymbol: boolean,
    public roundingCoefficient: number,
    public decimalDigits: number
  ) {}

  format(value: number): string {
    return "TODO!";
  }
}
