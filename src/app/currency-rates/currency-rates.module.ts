import { NgModule } from '@angular/core';
import { CurrencyRatesTableComponent } from './components/currency-rates-table/currency-rates-table.component';
import { NgxsModule } from '@ngxs/store';
import { CurrencyRatesState } from './store/currency-rates.state';
import { CommonModule } from '@angular/common';
import { MaterialLoaderModule } from '../material-loader.module';

@NgModule({
  declarations: [
    CurrencyRatesTableComponent
  ],
  imports: [
    CommonModule,
    MaterialLoaderModule,
    NgxsModule.forFeature([
      CurrencyRatesState
    ]),
  ],
  providers: [],
})
export class CurrenycRatesModule {

}
