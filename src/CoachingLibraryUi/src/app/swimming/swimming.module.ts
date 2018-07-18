import { NgModule } from '@angular/core';
import { SharedModule } from '@cl/shared/shared.module';
import { SwimmingRoutingModule } from '@cl/swimming/swimming-routing.module';
import { SwimmingComponent } from './swimming/swimming.component';
import { SwimmingSessionPlansComponent } from './swimming-session-plans/swimming-session-plans.component';
import { SwimmingSessionPlanComponent } from './swimming-session-plan/swimming-session-plan.component';

@NgModule({
  imports: [
    SharedModule,
    SwimmingRoutingModule
  ],
  declarations: [SwimmingComponent, SwimmingSessionPlansComponent, SwimmingSessionPlanComponent]
})
export class SwimmingModule { }
