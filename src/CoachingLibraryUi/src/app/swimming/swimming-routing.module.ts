import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwimmingComponent } from '@cl/swimming/swimming/swimming.component';
import { SwimmingSessionPlansComponent } from '@cl/swimming/swimming-session-plans/swimming-session-plans.component';
import { SwimmingSessionPlanComponent } from '@cl/swimming/swimming-session-plan/swimming-session-plan.component';

const routes: Routes = [
  { path: '',
    component: SwimmingComponent,
    children: [
      { path: '', component: SwimmingSessionPlansComponent },
      { path: 'new', component: SwimmingSessionPlanComponent },
      { path: ':id', component: SwimmingSessionPlanComponent }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwimmingRoutingModule { }
