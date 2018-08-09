import { Component} from '@angular/core';

@Component({
  selector: 'app-s3-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent {
  private data : string;

  onAddItem(data: string){
  this.data=data;

}
}