import { NgModule } from '@angular/core';
import { SharedModule } from '@cl/shared/shared.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LandingPageComponent]
})
export class LandingPageModule { }
