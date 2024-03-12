import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public day = new Date().getDay()
  public day5= 0
 myForm:string='';

 submit(){
   console.log("Form submitted")
 }
  
  ngOnInit(): void {
  }

}
