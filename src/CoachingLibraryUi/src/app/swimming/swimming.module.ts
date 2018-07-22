import { NgModule } from '@angular/core';

import { SharedModule } from '@cl/shared/shared.module';
import { StoreModule, ActionReducerMap } from '@ngrx/store';

import { SwimmingRoutingModule } from '@cl/swimming/swimming-routing.module';
import { SwimmingComponent } from '@cl/swimming/swimming/swimming.component';
import { SwimmingSessionPlansComponent } from '@cl/swimming/swimming-session-plans/swimming-session-plans.component';
import { SwimmingSessionPlanComponent } from '@cl/swimming/swimming-session-plan/swimming-session-plan.component';
import { swimmingStateReducer } from '@cl/swimming/state/swimming.state.reducer';

// TODO: can we use the same ActionMapReducer technique as root?

@NgModule({
  imports: [
    SharedModule,
    SwimmingRoutingModule,
    StoreModule.forFeature('swimming', swimmingStateReducer)
  ],
  declarations: [SwimmingComponent, SwimmingSessionPlansComponent, SwimmingSessionPlanComponent]
})
export class SwimmingModule { }
