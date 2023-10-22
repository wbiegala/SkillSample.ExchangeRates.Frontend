import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MaterialLoaderModule } from './material-loader.module';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';

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
    MaterialLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
