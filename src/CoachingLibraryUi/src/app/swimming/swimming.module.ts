import { NgModule } from '@angular/core';
import { SharedModule } from '@cl/shared/shared.module';
import { SwimmingRoutingModule } from '@cl/swimming/swimming-routing.module';

@NgModule({
  imports: [
    SharedModule,
    SwimmingRoutingModule
  ],
  declarations: []
})
export class SwimmingModule { }
