import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from "@angular/common/http";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productObj:object = {};
  confirmationMsg : string = "New product has been added.";
  isAdded: boolean = false;
  isValid: boolean = true;

  constructor(private http: HttpClient) {
  }

  addNewProduct = function(product){
this.isValid = this.form.valid;
this.formSubmitAttempt = true;
    if (this.form.valid) {
      alert("success");
      this.form.reset();
    }
    else{
      const invalid = [];
      const controls = this.form.controls;
      for (const name in controls) {
        if (controls[name].invalid) {
          invalid.push(name);
        }
      }

      var str = "Please enter following details:\n";
      for (const name in controls) {
        if (controls[name].invalid) {
          console.log(controls[name]);
          str += name +"\n";
        }
      }

      alert(str);
      return;
    }

    this.productObj = {
      "name": product.name,
      "price": product.price
    }
    this.http.post("http://localhost:5555/products/",this.productObj).subscribe(
      (res) => {
        console.log(res);
        this.isAdded = true;
      }
    )
  }
    formSubmitAttempt: boolean = false;


  form;
  ngOnInit(){
    this.form = new FormGroup(
      {
        name: new FormControl("", [Validators.required]),
        price: new FormControl("", [Validators.required])
      }
    );
  }

}
