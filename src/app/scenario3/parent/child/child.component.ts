import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-s3-child',
  templateUrl: './child.component.html'
})
export class ChildComponent{

    @Input('data') parentData:string;
   
   }

