import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-swimming-session-plan',
  templateUrl: './swimming-session-plan.component.html',
  styleUrls: ['./swimming-session-plan.component.scss']
})
export class SwimmingSessionPlanComponent implements OnInit {

  sessionForm: FormGroup;

  constructor() {
    this.sessionForm = new FormGroup({
      name: new FormControl(''),
      descirption: new FormControl('')
    });
  }

  ngOnInit() {
  }

}
