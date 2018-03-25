import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = 'Roshan';
  day = new Date(2018,3,25);
  ary = [1,5,3,8,7];
}
