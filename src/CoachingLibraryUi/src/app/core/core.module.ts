import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MainNavigationComponent } from './ui/main-navigation/main-navigation.component';
import { environment } from 'environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'Coaching Library',
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  exports: [
    MainNavigationComponent
  ],
  declarations: [
    MainNavigationComponent
  ]
})
export class CoreModule { }
