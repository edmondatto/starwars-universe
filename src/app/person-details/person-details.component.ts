import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Person } from '../person';
import { ActivatedRoute, Router } from '@angular/router';
import {PeopleService} from '../people.service';

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
    <button (click)="goToPeoplesList()">Back to People's List</button>
  `,
  styles: []
})
export class PersonDetailsComponent implements OnInit {
  @Input() person: Person;
  sub: any;
  constructor(private route: ActivatedRoute,
              private peopleService: PeopleService,
              private router: Router) { }

  goToPeoplesList() {
    const link = ['/persons'];
    this.router.navigate(link);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = Number.parseInt(params['id']);
      this.person = this.peopleService.get(id);
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
