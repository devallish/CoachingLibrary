import { NgModule } from '@angular/core';

import { SharedModule } from '@cl/shared/shared.module';
import { RugbyRoutingModule } from '@cl/rugby/rugby-routing.module';
import { RugbyComponent } from '@cl/rugby/rugby/rugby.component';
import { RugbyPlayerAssessmentsComponent } from '@cl/rugby/rugby-player-assessments/rugby-player-assessments.component';

@NgModule({
  imports: [
    SharedModule,
    RugbyRoutingModule
  ],
  declarations: [RugbyComponent, RugbyPlayerAssessmentsComponent]
})
export class RugbyModule { }
