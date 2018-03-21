import { Component } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  form;
  ngOnInit(){
    this.form = new FormGroup(
      {
        firstName: new FormControl("Roshan"),
        lastName: new FormControl(""),
        languages: new FormControl("")
      }
    );
  }

  onSubmit=function(user){
    console.log(user);
  }
}
