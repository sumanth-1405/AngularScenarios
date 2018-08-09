import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s4-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {
  private data:string;

  constructor() { }
  displayData(data:string) {
    this.data=data;
}

  ngOnInit() {
  }

}
