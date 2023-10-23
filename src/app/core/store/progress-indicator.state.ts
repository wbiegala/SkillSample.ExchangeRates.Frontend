import {Injectable} from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { DisableProgressIndicator, EnableProgressIndicator } from './progress-indicator.actions';
import { produce } from 'immer';

export interface ProgressIndicatorStateModel {
  enabled: boolean;
}

export const defaultState: ProgressIndicatorStateModel = {
  enabled: false,
}

@State<ProgressIndicatorStateModel>({
  name: 'progressIndicatorState',
  defaults: defaultState
})
@Injectable()
export class ProgressIndicatorState {

  @Selector()
  public static topProgressBarEnabled(state: ProgressIndicatorStateModel): Readonly<boolean> {
    return state.enabled;
  }

  @Action(EnableProgressIndicator)
  public enableTopProgressBar(ctx: StateContext<ProgressIndicatorStateModel>) {
    ctx.setState(produce(draft => {
      draft.enabled = true;
    }));
  }

  @Action(DisableProgressIndicator)
  public disableTopProgressBar(ctx: StateContext<ProgressIndicatorStateModel>) {
    ctx.setState(produce(draft => {
      draft.enabled = false;
    }));
  }
}
