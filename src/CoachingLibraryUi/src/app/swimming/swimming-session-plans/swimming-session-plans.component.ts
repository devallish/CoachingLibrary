import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Subscription } from 'rxjs/internal/Subscription';

import { SwimmingStateContainer } from '@cl/swimming/state/swimming-state';
import { SessionPlan } from '@cl/swimming/state/model/session-plan';
import * as fromSwimmingSelectors from '@cl/swimming/state/swimming.selectors';

@Component({
  selector: 'app-swimming-session-plans',
  templateUrl: './swimming-session-plans.component.html',
  styleUrls: ['./swimming-session-plans.component.scss']
})
export class SwimmingSessionPlansComponent implements OnInit, OnDestroy {

  sessionPlans: Array<SessionPlan>;

  private subscriptions: Subscription;

  constructor(private stateStore: Store<SwimmingStateContainer>) {
    this.subscriptions = new Subscription();
  }

  ngOnInit() {
    this.subscriptions.add(
      this.stateStore.pipe(select(fromSwimmingSelectors.getSessionPlans))
        .subscribe(sessionPlans => this.sessionPlans = sessionPlans)
    );
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

}
