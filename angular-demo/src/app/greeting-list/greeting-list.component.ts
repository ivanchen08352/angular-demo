import { Component, OnInit } from '@angular/core';

interface Greeting {
  greeting: string;
}

@Component({
  selector: 'app-greeting-list',
  templateUrl: './greeting-list.component.html',
  styleUrls: ['./greeting-list.component.css']
})
export class GreetingListComponent implements OnInit {
  list: Greeting[]

  constructor() { }

  ngOnInit(): void {
    this.list = [
      { greeting: 'Hi' },
      { greeting: 'Welcome' }
    ]
  }

  receiveGreeting(greeting: string) {
    this.list.push({
      greeting
    })
  }

}
