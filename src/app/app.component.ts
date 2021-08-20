import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    let employees = ['Akshay Patel', 'Panth Patel'];
    for (let employee of employees) {
      console.log(employee);
    }
  }
}
