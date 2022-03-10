import { Component, OnInit } from '@angular/core';

import { Greeting } from '../interface';
import { GreetingService } from '../greeting.service';

@Component({
  selector: 'app-greeting-list',
  templateUrl: './greeting-list.component.html',
  styleUrls: ['./greeting-list.component.css']
})
export class GreetingListComponent implements OnInit {
  list: Greeting[]

  constructor(
    private greetingService: GreetingService
  ) { }

  ngOnInit(): void {
    this.list = this.greetingService.list;
    console.log(this.greetingService.list);
  }

  receiveGreeting(greeting: string) {
    this.greetingService.add(greeting);
    this.list = this.greetingService.list;
  }

}
