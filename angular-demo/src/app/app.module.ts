import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { GreetingListComponent } from './greeting-list/greeting-list.component';
import { AddGreetingComponent } from './greeting-list/add-greeting/add-greeting.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingListComponent,
    AddGreetingComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
