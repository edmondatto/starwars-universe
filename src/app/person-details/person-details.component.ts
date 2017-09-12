import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Person } from '../person';
import { ActivatedRoute, Router } from '@angular/router';
import {PeopleService} from '../people.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
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
