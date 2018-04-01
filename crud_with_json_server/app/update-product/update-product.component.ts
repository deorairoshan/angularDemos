import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id:number;
  data:object = {};
  products:any = [];
  productObj:object = {};
  private headers = new HttpHeaders({"Content-Type": "application/json"});
  exists:boolean = false;

  constructor(private router: Router, private route:ActivatedRoute, private http: HttpClient) { }

  updateProduct (product) {

    this.productObj = {
      "name": product.name,
      "price": product.price
    };

    const url = `${"http://localhost:5555/products"}/${this.id}`;
    return this.http.put(url, JSON.stringify(this.productObj), {headers: this.headers}).toPromise().then(
      () => {
        this.router.navigate(['/']);
      }
    );
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.http.get("http://localhost:5555/products").subscribe(
      (res) => {
        this.products = res;
        for (var i=0; i<this.products.length;i++){
          if(parseInt(this.products[i].id) === this.id){
            this.data = this.products[i];
            this.exists = true;
            break;
          }
          else{
            this.exists = false;
          }
        }
      }
    )
  }

}
