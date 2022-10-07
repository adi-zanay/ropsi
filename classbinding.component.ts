import { Component } from '@angular/core';

@Component({
  selector: 'clsbinding',
  template :`
      <button         [class.btn]="cl1"
        [class.btn-danger]="cl2"
        [class.active]="one">

        CLICK HERE
      </button>
  `
})
export class classComponent {

  cl1 = true;
  cl2 = true;
  one = false;

}
