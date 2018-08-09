import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { GrandchildComponent } from './parent/child/grandchild/grandchild.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ParentComponent, ChildComponent, GrandchildComponent],
  exports:[ParentComponent,ChildComponent,GrandchildComponent]
})
export class Scenario5Module { }
