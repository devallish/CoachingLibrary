import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MainNavigationComponent } from '@cl/core/ui/main-navigation/main-navigation.component';
import { environment } from 'environments/environment';

import { appStateReducer } from './state/app.reducer';
import { StateContainer } from '@cl/shared/state/app.state';

const reducers: ActionReducerMap<StateContainer> = {
  app: appStateReducer
};

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    StoreModule.forRoot(reducers),
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
