import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MemberComponent } from './member/member.component';
import { MyDataService } from './my-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MemberComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'member',
        component: MemberComponent
      }
      ]
    )
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
