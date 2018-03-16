import { CurrencyDto } from "../dtos/readServices/referenceDataDtos";
import { Currency } from "../models/";

class CurrencyMapper {

  map(dto: CurrencyDto): Currency {
    return new Currency(
      dto.Code,
      dto.Symbol,
      dto.ThousandsSeparator,
      dto.DecimalSeparator,
      dto.SymbolOnLeft,
      dto.SpaceBetweenAmountAndSymbol,
      dto.RoundingCoefficient ? dto.RoundingCoefficient : 0,
      dto.DecimalDigits ? dto.DecimalDigits : 2
    );
  }
}
export default CurrencyMapper;