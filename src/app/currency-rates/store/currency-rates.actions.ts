import { GetExchangeRatesResponseDto } from 'src/app/shared/currency-rates/currency-rates.model';

export class InitializeCurrencyRates {
  static readonly type = '[CurrencyRates] Initialize currency rates';
}

export class InitializeCurrencyRatesSuccess {
  static readonly type = '[CurrencyRates] Initialize currency rates - success';
  constructor(public data: GetExchangeRatesResponseDto) {}
}

export class InitializeCurrencyRatesFail {
  static readonly type = '[CurrencyRates] Initialize currency rates - fail';
  constructor(public error: any) {}
}
