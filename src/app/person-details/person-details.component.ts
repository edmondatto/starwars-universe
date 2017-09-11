import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-details',
  template: `
    <section>
      <div *ngIf="person">
        <h2>You have selected: {{ person.name }}</h2>
        <h3>Description</h3>
        <p>{{ person.name }} weighs {{ person.weight }} and is {{ person.height }} tall</p>
      </div>
    </section>
  `,
  styles: []
})
export class PersonDetailsComponent implements OnInit {
  @Input() person: Person;
  constructor() { }

  ngOnInit() {
  }

}
