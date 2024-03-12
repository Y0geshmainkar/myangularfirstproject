import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  userData: any = [
    { SLno: 1, ItemDescription: "CD", Quantity: 1 },
    { SLno: 2, ItemDescription: "Pendrive", Quantity: 1 },
    { SLno: 3, ItemDescription: "Mouse", Quantity: 1 },
    { SLno: 4, ItemDescription: "Keyboard", Quantity: 1 },
    { SLno: 5, ItemDescription: "Laptop", Quantity: 1 },
    { SLno: 6, ItemDescription: "VivoBook", Quantity: 1 },
    { SLno: 7, ItemDescription: "Ipad", Quantity: 1 }
  ];

  removedata(element:any) {
    this.userData.forEach((value:any,index:any) => {
      if(value == element)
      this.userData.splice(index,1);
      console.log(this.userData);
    });
  }
  reloadPage(){
    window.location.reload();
  }
  constructor() {

  }


  ngOnInit(): void {
  }

}
