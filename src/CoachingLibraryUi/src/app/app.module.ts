import { NgModule } from '@angular/core';

import { CoreModule } from '@cl/core/core.module';
import { AppRoutingModule } from '@cl/app-routing.module';

import { AppComponent } from '@cl/app.component';
import { LandingPageModule } from '@cl/landing-page/landing-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    LandingPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
