import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '@cl/shared/state/app.state';

const getAppFeatureState = createFeatureSelector<AppState>('app');

export const getApplicationTitle = createSelector(
  getAppFeatureState,
  state => state.appTitle
);
