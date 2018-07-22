import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RugbyComponent } from '@cl/rugby/rugby/rugby.component';
import { RugbyPlayerAssessmentsComponent } from '@cl/rugby/rugby-player-assessments/rugby-player-assessments.component';

const routes: Routes = [
  { path: '',
    component: RugbyComponent,
    children: [
      { path: '', component: RugbyPlayerAssessmentsComponent }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RugbyRoutingModule { }
