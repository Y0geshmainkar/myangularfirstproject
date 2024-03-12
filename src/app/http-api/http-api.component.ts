import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service'
@Component({
  selector: 'app-http-api',
  templateUrl: './http-api.component.html',
  styleUrls: ['./http-api.component.css']
})
export class HttpAPIComponent implements OnInit {

  dataFromApi:any=[];
  constructor(private user:DataService )
  {
    this.user.getData().subscribe(abcd=>{
      console.log(abcd)
      this.dataFromApi=abcd
     
    })
    
   }
  ngOnInit(): void {
  }

}
