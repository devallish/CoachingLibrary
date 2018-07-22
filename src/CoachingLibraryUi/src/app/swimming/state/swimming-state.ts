import * as fromApp from '@cl/shared/state/app.state';
import { SessionPlan } from '@cl/swimming/state/model/session-plan';

export interface SwimmingStateContainer extends fromApp.StateContainer {
  swimming: SwimmingState;
}
export interface SwimmingState {
  sectionTitle: string;
  sessionPlans: Array<SessionPlan>;
}
