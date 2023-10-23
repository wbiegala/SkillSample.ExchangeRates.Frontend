export interface GetExchangeRatesResponseDto {
  effectiveDate: Date;
  tableNumber: string;
  currencyRates: Array<CurrencyEntryDto>;
}

export interface CurrencyEntryDto {
  currencyCode: string;
  currencyName: string;
  rate: number;
}
