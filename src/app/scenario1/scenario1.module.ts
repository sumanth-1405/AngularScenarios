import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports: [
    CommonModule,
    ChildComponent
  ],
  declarations: [ChildComponent]
})
export class Scenario1Module { }
