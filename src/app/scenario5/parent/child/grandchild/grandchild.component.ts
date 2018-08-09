import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-s5-grandchild',
  templateUrl: './grandchild.component.html'
})
export class GrandchildComponent implements OnInit {
  @Output() displayData=new EventEmitter();
  private data:string;
  constructor() { }
  onChange(data:string){
    this.data=data;
    this.displayData.emit(this.data);
  }

  ngOnInit() {
  }

}
