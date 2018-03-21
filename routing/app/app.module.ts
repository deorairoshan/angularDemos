import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MemberComponent } from './member/member.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
