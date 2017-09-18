import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleService } from './people.service';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { appRouterModule } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MinValidatorDirective } from './min-validator.directive';
import { MaxValidatorDirective } from './max-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PersonDetailsComponent,
    MinValidatorDirective,
    MaxValidatorDirective
  ],
  imports: [
    BrowserModule,
    appRouterModule,
    FormsModule,
    HttpModule,
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
