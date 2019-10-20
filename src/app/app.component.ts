import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Currency-Manager';
  ready = false;
  angularActive = false;
  currencies: any = [
      {
        active: true,
        name: 'Dollar',
        symbol: 'USD',
        rate: 1},
      {
        active: true,
        name: 'Euro',
        symbol: 'EUR',
        rate: 0.8973438622},
      {
        active: true,
        name: 'Pound sterling',
        symbol: 'GBP',
        rate: 0.7756191673},
      {
        active: true,
        name: 'Yen',
        symbol: 'JPY',
        rate: 108.5516870065},
      {
        active: true,
        name: 'Bitcoin',
        symbol: 'BTC',
        rate: 0.00012}
  ];
  lat = 25.7799355;
  lng = -80.1866916;
  constructor() {
    setTimeout(() => {
      this.ready = true;
    }, 3500);
  }
  showExample() {
    alert('You should see now the Angular default example.');
    this.angularActive = true;
    this.ready = false;
  }
}
