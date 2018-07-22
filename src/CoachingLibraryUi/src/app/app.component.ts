import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Subscription } from 'rxjs/internal/Subscription';

import { AppState } from '@cl/shared/state/app.state';
import * as fromAppSelectors from '@cl/core/state/app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title: string;

  private subscriptions: Subscription;

  constructor(private stateStore: Store<AppState>) {
    this.subscriptions = new Subscription();
  }

  ngOnInit() {
    this.stateStore
      .pipe(select(fromAppSelectors.getApplicationTitle))
      .subscribe(appTitle => this.title = appTitle);
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}
