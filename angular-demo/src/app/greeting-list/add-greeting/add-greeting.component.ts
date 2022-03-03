import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Greeting {
  greeting: string;
}

@Component({
  selector: 'app-add-greeting',
  templateUrl: './add-greeting.component.html',
  styleUrls: ['./add-greeting.component.css']
})
export class AddGreetingComponent implements OnInit {
  greeting: string;
  @Input() greetingList: Greeting[];
  @Output() receiveGreeting = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.greeting = 'Hi';
    console.log(this.greetingList);
  }

  addGreeting() {
    this.receiveGreeting.emit(this.greeting);
  }

}
