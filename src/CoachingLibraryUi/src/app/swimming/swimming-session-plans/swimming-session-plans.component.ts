import { Component, OnInit, OnDestroy } from '@angular/core';
import { SwimmingStateContainer } from '@cl/swimming/state/swimming-state';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs/internal/Subscription';
import * as fromSwimmingSelectors from '@cl/swimming/state/swimming.selectors';
import { SessionPlan } from '@cl/swimming/state/model/session-plan';

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
