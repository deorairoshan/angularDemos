import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

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
        firstName: new FormControl("", Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[\\w\\-\\s\\/]+')
          ])),
        lastName: new FormControl("", this.lastNameValidator),
        languages: new FormControl("", Validators.required)
      }
    );
  }

  lastNameValidator(control)
  {
    if (control.value.length < 3 )
    {
      //if(control.value === 'abc') {
        return {'lastName' : true};
      //}
      //return {'lastName': true};
    }
  }

  onSubmit=function(user){
    console.log(user);
  }
}
