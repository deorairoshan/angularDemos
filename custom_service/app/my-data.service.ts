import { Injectable } from '@angular/core';

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


  constructor() { }

}
