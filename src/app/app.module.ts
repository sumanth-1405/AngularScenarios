import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Scenario1Module } from './scenario1/scenario1.module';
import { ChildComponent } from './scenario1/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
