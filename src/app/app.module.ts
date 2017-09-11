import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleService } from './people.service';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { appRouterModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
