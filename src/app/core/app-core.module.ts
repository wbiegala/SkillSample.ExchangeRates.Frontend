import { NgModule } from '@angular/core';
import { RoutingLayoutComponent } from './components/routing-layout/routing-layout.component';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/app-layout/header/header.component';
import { ProgressIndicatorComponent } from './components/app-layout/progress-indicator/progress-indicator.component';
import { MaterialLoaderModule } from '../material-loader.module';
import { CommonModule } from '@angular/common';
import { ProgressIndicatorState } from './store/progress-indicator.state';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [
    RoutingLayoutComponent,
    AppLayoutComponent,
    ErrorComponent,
    HeaderComponent,
    ProgressIndicatorComponent
  ],
  imports: [
    RouterModule,
    MaterialLoaderModule,
    CommonModule,
    NgxsModule.forFeature([
      ProgressIndicatorState
    ]),
  ],
  providers: [],
})
export class AppCoreModule {

}
