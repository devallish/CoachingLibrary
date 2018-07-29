import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Subscription } from 'rxjs/internal/Subscription';

import { SwimmingState } from '@cl/swimming/state/swimming-state';
import * as fromSwimmingSelectors from '@cl/swimming/state/swimming.selectors';

@Component({
  selector: 'app-swimming',
  templateUrl: './swimming.component.html',
  styleUrls: ['./swimming.component.scss']
})
export class SwimmingComponent implements OnInit, OnDestroy {

  sectionTitle: string;
  subscriptions: Subscription;

  constructor(private stateStore: Store<SwimmingState>) {
    this.subscriptions = new Subscription();
  }

  ngOnInit() {
    this.stateStore.pipe(select(fromSwimmingSelectors.getSectionTitle))
      .subscribe(sectionTitle => this.sectionTitle = sectionTitle);
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

}
