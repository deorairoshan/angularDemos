import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

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

 constructor(private http: HttpClient) {
 }

 fetchData(){
     this.http.get('http://localhost:8080/TestWebProject/product.json').subscribe(
    // this.http.get('/src/data/product.json').subscribe(
      (data) => console.log(data)
    );
 }

}
