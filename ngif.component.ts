import { Component } from '@angular/core';

@Component({
  selector: 'ngif',
  template :`
      <h1>
        <div *ngIf="arr.length>0">
            Array has {{arr.length}} elements.
        </div>
        <div *ngIf="arr.length==0">
            Array is empty.
        </div>
      </h1>
  `
})
export class ngifComponent {

    arr = ['pen','study','work','job','placement'];

}
