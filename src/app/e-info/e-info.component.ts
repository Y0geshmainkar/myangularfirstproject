import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css'],
  providers:[DataService]
})
export class EInfoComponent implements OnInit {
  
  infoReceive1: string[]=[];
  infoReceive2: string[]=[];
  infoReceive3: string[]=[];
  

  getInfFromService1(){
    this.infoReceive1=this.Dservice.getInfo1()
    console.log(this.infoReceive1);
  }
  getInfFromService2(){
    this.infoReceive2=this.Dservice.getInfo2()
    console.log(this.infoReceive2)
  }
  getInfFromService3(){
    this.infoReceive3=this.Dservice.getInfo3()
    console.log(this.infoReceive3)
  }

  reloadPage(){
    window.location.reload()
  }
  
  constructor(private Dservice :DataService) { }

 

  ngOnInit(): void {
  }

}
