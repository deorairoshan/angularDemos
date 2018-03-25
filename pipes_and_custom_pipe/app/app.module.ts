import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SortPipe } from "./app.sort";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SortPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
