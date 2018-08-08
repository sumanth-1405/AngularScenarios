import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
              
})
export class ChildComponent {

  private data : string;
  constructor() { }

  onAddItem(data: string){
    this.data=data;
 
 }
}

 



