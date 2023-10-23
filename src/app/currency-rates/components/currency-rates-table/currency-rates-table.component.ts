import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-rates-table',
  templateUrl: './currency-rates-table.component.html',
  styleUrls: ['./currency-rates-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyRatesTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
