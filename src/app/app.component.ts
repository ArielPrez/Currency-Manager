import { Component } from '@angular/core';

@Component({
  selector: 'app-crncy-man',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Currency-Manager';
  ready = false;

  constructor() {
    setTimeout(() => {
      this.ready = true;
    }, 3500);
  }
  showExample() {
    alert('You should see now the Angular default example.');
  }
}
