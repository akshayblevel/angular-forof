# angular-forof

app.component.ts

```js
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
```

![image](https://user-images.githubusercontent.com/38757471/130256105-dd5be571-79e5-47d4-aa7b-d4d51f6cf1ba.png)

