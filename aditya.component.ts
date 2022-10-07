import { Component } from "@angular/core";

@Component ({
    selector: 'aditya',
    template: `<h1>
    <table [border]="bdr" [width]="1000" [bgColor]="bgcol">
      <tr [style.color]="'blue'">
        <td>Our course code is <b>{{course_code}}</b></td>
        <td>Faculty of the course is <b>{{course_faculty}}</b></td>
      </tr>
      <tr [style.fontfamily]="ffm">
        <td><b><span>Regd. No. : {{reg}}</span></b></td>
        <td><b><span>Name : {{nam |  uppercase}}</span></b></td>
      </tr>
    </table></h1>`,
    // styleUrls: ['./app.component.css']
})

export class adityacomponent {
    bdr= 3;
    bgcol = "orange";
    ffm = ""

    course_code='CAP917';
    course_faculty='Mandeep Mam';
    reg="12000211";
    nam="aditya raj";
}
