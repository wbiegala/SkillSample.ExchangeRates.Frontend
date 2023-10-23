import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { Select } from '@ngxs/store';
import { Observable, map } from 'rxjs';
import { ProgressIndicatorState } from 'src/app/core/store/progress-indicator.state';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressIndicatorComponent {

  @Select(ProgressIndicatorState.topProgressBarEnabled)
  public enabled$: Observable<boolean>;

  public mode$: Observable<ProgressBarMode>;

  constructor() {
    this.mode$ = this.enabled$.pipe(
      map(isEnabled => isEnabled ? 'indeterminate' : 'determinate')
    );
  }

}
