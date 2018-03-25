import { Component } from '@angular/core';
import { MyDataService } from './my-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private newService: MyDataService){
  }

  ngOnInit(){
    console.log(this.newService.success());
    console.log(this.newService.obj);
    this.newService.obj.price = 12000.00;
  }
}
