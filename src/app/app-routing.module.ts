import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { RoutingLayoutComponent } from './core/components/routing-layout/routing-layout.component';
import { CurrencyRatesTableComponent } from './currency-rates/components/currency-rates-table/currency-rates-table.component';
import { ErrorComponent } from './core/components/error/error.component';

const routes: Routes = [{
  path: '',
  component: RoutingLayoutComponent,
  children: [{
    path: '',
    component: CurrencyRatesTableComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  }]
}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
