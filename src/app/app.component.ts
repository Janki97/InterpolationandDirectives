import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularExample';
  pageTitle = 'Interpolation ';
  pageTitle1 = 'Directives ';
  Name='Janki Patel';
  codeName='@JankiPatel';
  binding:string = "Hello";
  weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
}
