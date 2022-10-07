import { Component } from '@angular/core';

@Component({
  selector: 'ngfor',
  template :`
      <h1>
        <!-- <div *ngFor='let val of arr'>
            {{val}}
        </div> -->
        <table  border="3">
          <tr *ngFor='let val of arr'>
            <td>
              {{val}}
            </td>
        </table>
      </h1>
  `
})
export class ngforComponent {

    arr = ['pen','study','work','job','placement'];

}
