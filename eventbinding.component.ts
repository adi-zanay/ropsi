import { Component } from '@angular/core';

@Component({
  selector: 'evtbinding',
  template :`
  <!-- <button type="button" (click)="myclick($event)">CLICK</button> -->
  <br>
  <input [(ngModel)]="sec" (keyup.enter)="showsec($event)">
  `
})
export class eventBindingComponent {

  
  sec = "CAP917";
  showsec($event: any)
  {
    console.log("SHOW : ",$event);

  }
  // myClick(){
  //   this.i++;
  //   console.log("This button click count : "+this.i);
  // }

  //   mykeyup($event:any)
  //   {
  //     console.log("You Pressed 'I'");

  //   }

}
