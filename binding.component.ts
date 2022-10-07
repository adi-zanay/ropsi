import { Component } from '@angular/core';

@Component({
  selector: 'binding',
  template :`<button type="button" (click)="myClick()">CLICK</button>
  <h2>Enter your choice : </h2>
  <input (keyup.i)="mykeyup($event)">
  `
})
export class BindingComponent {

  i=0;
  myClick(){
    this.i++;
    console.log("This button click count : "+this.i);
  }

    mykeyup($event:any)
    {
      console.log("You Pressed 'I'");

    }

}
