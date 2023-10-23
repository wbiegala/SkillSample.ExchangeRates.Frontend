import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, takeUntil, tap } from 'rxjs';
import { DisableProgressIndicator, EnableProgressIndicator } from '../../core/store/progress-indicator.actions';


@Injectable({
  providedIn: 'root'
})
export class ProgressIndicatorService {
  constructor(private store: Store) {}

  public runWithProgressIndicator<TResult>(source: Observable<TResult>,
    cancellationToken: Observable<any>,
    handleSub: boolean = false): Observable<TResult> {
    this.store.dispatch(new EnableProgressIndicator());

    const subject = source.pipe(
      takeUntil(cancellationToken),
      tap({
        error: () => this.store.dispatch(new DisableProgressIndicator()),
        complete: () => this.store.dispatch(new DisableProgressIndicator())
      }));

      if (handleSub)
        subject.subscribe();

      return subject;
  }

  public runWithProgressBar<TResult>(source: Observable<TResult>): Observable<TResult> {
    this.store.dispatch(new EnableProgressIndicator());

    return source.pipe(
      tap({
        error: () => this.store.dispatch(new DisableProgressIndicator()),
        complete: () => this.store.dispatch(new DisableProgressIndicator())
      }));
  }
}
