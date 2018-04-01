import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:any = [];
  id:number;
  private headers = new HttpHeaders({"Content-Type": "application/json"});

  constructor(private http: HttpClient) { }

  fetchData = function(){
    this.http.get("http://localhost:5555/products").subscribe(
      (res) => {
        this.products = res;
      }
    )
  };

  deleteProduct = function (id) {
    if(confirm("Are you sure?")){
      const url = `${"http://localhost:5555/products"}/${id}`;
      return this.http.delete(url, this.headers).toPromise().then(
        () => this.fetchData()
      );
    }
  }

  ngOnInit() {
   this.fetchData();
  }
}
