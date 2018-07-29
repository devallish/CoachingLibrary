import { SwimmingState } from '@cl/swimming/state/swimming-state';

export function swimmingStateReducer(state: SwimmingState = initialState, action): SwimmingState {
  return state;
}
const initialState: SwimmingState = {
  sectionTitle: 'Swimming',
  sessionPlans: [
    { id: 1, name: 'Sample Session Plan', description: 'This is a sample session plan' },
    { id: 2, name: 'Sample Session Plan', description: 'This is a sample session plan' },
    { id: 3, name: 'Sample Session Plan', description: 'This is a sample session plan' },
    { id: 4, name: 'Sample Session Plan', description: 'This is a sample session plan' },
  ]
};
