import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MyDataService {

  obj = {
    id: 101,
    product: 'Moto G5s Plus',
    price: 15000.00
  }

  success(){
    return 'Successful';
  }

  private headers = new HttpHeaders({"Content-Type": "application/json"});

 constructor(private http: HttpClient) {
 }

 fetchData(){
     this.http.get(`http://localhost:8080/TestWebProject/product.json`,{headers: this.headers}).toPromise().then(
      (data) => console.log(data)
    );
 }
}
