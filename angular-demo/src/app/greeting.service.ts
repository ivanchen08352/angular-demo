import { Injectable, OnInit } from '@angular/core';
import { Greeting } from './interface';

@Injectable({
  providedIn: 'root'
})
export class GreetingService implements OnInit {
  list: Greeting[] = []

  constructor() { }

  ngOnInit(): void {
  }

  add(greeting: string) {
    this.list.push({
      greeting
    });
  }
}
