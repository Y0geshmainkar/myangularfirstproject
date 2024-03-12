import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1:string[]=["John R","E123","John@abc.net"]

  info2:string[]=["Rena","E124","Rena@abc.net"]

  info3:string[]=["MAYA","E126","Maya@abc.net"]

  getInfo1():string[]{
    return this.info1
  }
  getInfo2():string[]{
    return this.info2
  }
  getInfo3():string[]{
    return this.info3
  }
  constructor(private http:HttpClient) { }
  getData(){
    let url="http://jsonplaceholder.typicode.com/todos"
    return this.http.get(url);
  }
}
