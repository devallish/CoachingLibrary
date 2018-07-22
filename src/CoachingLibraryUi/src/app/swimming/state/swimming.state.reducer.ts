import { SwimmingState } from '@cl/swimming/state/swimming-state';

export function swimmingStateReducer(state: SwimmingState = initialState, action): SwimmingState {
  return state;
}
const initialState: SwimmingState = {
  sectionTitle: 'Swimming',
  sessionPlans: [
    { name: 'Sample Session Plan', description: 'This is a sample session plan' }
  ]
};
