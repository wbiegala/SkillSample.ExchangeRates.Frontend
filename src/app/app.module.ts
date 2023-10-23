import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MaterialLoaderModule } from './material-loader.module';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppCoreModule } from './core/app-core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrenycRatesModule } from './currency-rates/currency-rates.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
    MaterialLoaderModule,
    AppRoutingModule,
    AppCoreModule,
    CurrenycRatesModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
