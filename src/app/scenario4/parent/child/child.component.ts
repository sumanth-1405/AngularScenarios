import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-s4-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {
  @Output() displayData = new EventEmitter();
  private data:string;

  constructor() { }
  onChange(data:string){
    this.data=data;
    this.displayData.emit(this.data);
  }

  ngOnInit() {
  }

}