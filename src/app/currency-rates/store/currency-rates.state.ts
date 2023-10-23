import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ProgressIndicatorService } from 'src/app/shared/core/progress-indicator.service';
import { CurrencyEntryDto, GetExchangeRatesResponseDto } from 'src/app/shared/currency-rates/currency-rates.model';
import { CurrencyRatesService } from 'src/app/shared/currency-rates/currency-rates.service';
import { InitializeCurrencyRates, InitializeCurrencyRatesFail, InitializeCurrencyRatesSuccess } from './currency-rates.actions';
import { tap } from 'rxjs';

export const defaultState: GetExchangeRatesResponseDto = {
  effectiveDate: undefined,
  tableNumber: undefined,
  currencyRates: []
};
@State<GetExchangeRatesResponseDto>({
  name: 'currencyRatesState',
  defaults: defaultState
})
@Injectable()
export class CurrencyRatesState {

  @Selector()
  static getEffectiveDate(state: GetExchangeRatesResponseDto): Readonly<Date> {
    return state.effectiveDate;
  }

  @Selector()
  static getTableNumber(state: GetExchangeRatesResponseDto): Readonly<string> {
    return state.tableNumber;
  }

  @Selector()
  static getRates(state: GetExchangeRatesResponseDto): ReadonlyArray<CurrencyEntryDto> {
    return state.currencyRates;
  }

  constructor(private currencyRates: CurrencyRatesService, private progress: ProgressIndicatorService) { }

  @Action(InitializeCurrencyRates)
  initializeCurrencyRates(ctx: StateContext<GetExchangeRatesResponseDto>) {
    return this.progress.runWithProgressBar(this.currencyRates.getExchangeRates().pipe(
      tap({
        next: apiData => ctx.dispatch(new InitializeCurrencyRatesSuccess(apiData)),
        error: err => ctx.dispatch(new InitializeCurrencyRatesFail(err)),
      }),
    ));
  }

  @Action(InitializeCurrencyRatesSuccess)
  initializeCurrencyRatesSuccess(ctx: StateContext<GetExchangeRatesResponseDto>, { data }: InitializeCurrencyRatesSuccess) {
    ctx.setState(data);
  }

  @Action(InitializeCurrencyRatesFail)
  initializeCurrencyRatesFail(ctx: StateContext<GetExchangeRatesResponseDto>, {error}: InitializeCurrencyRatesFail) {

  }
}
