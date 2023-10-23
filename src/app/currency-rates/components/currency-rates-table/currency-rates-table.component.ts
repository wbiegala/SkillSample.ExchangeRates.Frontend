import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { InitializeCurrencyRates } from '../../store/currency-rates.actions';
import { Observable } from 'rxjs';
import { CurrencyEntryDto } from 'src/app/shared/currency-rates/currency-rates.model';
import { CurrencyRatesState } from '../../store/currency-rates.state';

@Component({
  selector: 'app-currency-rates-table',
  templateUrl: './currency-rates-table.component.html',
  styleUrls: ['./currency-rates-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyRatesTableComponent implements OnInit {
  displayedColumns: string[] = ['code', 'name', 'rate'];

  @Select(CurrencyRatesState.getEffectiveDate)
  effectiveDate$: Observable<Readonly<Date>>;

  @Select(CurrencyRatesState.getTableNumber)
  tableNumber$: Observable<Readonly<string>>;

  @Select(CurrencyRatesState.getRates)
  rates$: Observable<ReadonlyArray<CurrencyEntryDto>>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new InitializeCurrencyRates());
  }

}
