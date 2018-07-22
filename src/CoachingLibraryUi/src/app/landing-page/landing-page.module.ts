import { NgModule } from '@angular/core';
import { SharedModule } from '@cl/shared/shared.module';
import { LandingPageComponent } from '@cl/landing-page/landing-page/landing-page.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LandingPageComponent]
})
export class LandingPageModule { }
