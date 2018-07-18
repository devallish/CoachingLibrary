import { NgModule } from '@angular/core';

import { SharedModule } from '@cl/shared/shared.module';
import { RugbyRoutingModule } from '@cl/rugby/rugby-routing.module';

@NgModule({
  imports: [
    SharedModule,
    RugbyRoutingModule
  ],
  declarations: []
})
export class RugbyModule { }
