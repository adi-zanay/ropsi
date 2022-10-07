import { Component } from '@angular/core';

@Component({
  selector: 'two',
  template :`
        <h2>
          <input [(ngModel)] = "section" (keyUp.shift)="showSection()">
        </h2>
  `,
  styleUrls : ['./profile.component.css']
})
export class twowayComponent {

    section = "DE1800"
   showSection(){

    console.log(this.section);
   }


}
