import { AppState } from '@cl/shared/state/app.state';

export function appStateReducer(state: AppState = initialAppState, action): AppState {
  return {...state};
}

const initialAppState: AppState = {
  appTitle: 'Coaching Library'
};
