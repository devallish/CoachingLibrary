import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SwimmingState } from '@cl/swimming/state/swimming-state';

const getSwimmingFeatureState = createFeatureSelector<SwimmingState>('swimming');

export const getSessionPlans = createSelector(
  getSwimmingFeatureState,
  state => state.sessionPlans,
);

export const getSectionTitle = createSelector(
  getSwimmingFeatureState,
  state => state.sectionTitle
);
