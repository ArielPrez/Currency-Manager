import { Component } from '@angular/core';

@Component({
  selector: 'app-crncy-man',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Currency-Manager';
  ready = false;
  currencies: any = [
      {active: true, name: 'Dollar'},
      {active: true, name: 'Euro'},
      {active: true, name: 'Pound sterling'},
      {active: false, name: 'Bitcoin'}
  ];

  constructor() {
    setTimeout(() => {
      this.ready = true;
    }, 3500);
  }
  showExample() {
    alert('You should see now the Angular default example.');
  }
}
