import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productObj:object = {};
  confirmationMsg : string = "New product has been added.";
  isAdded: boolean = false;

  constructor(private http: HttpClient) {
  }

  addNewProduct = function(product){
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

  ngOnInit() {
  }

}
