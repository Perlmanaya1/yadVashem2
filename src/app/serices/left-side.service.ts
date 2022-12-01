import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeftSide } from '../models/leftSide.interface';

@Injectable({
  providedIn: 'root'
})
export class LeftSideService {

  constructor(private http:HttpClient) { }

  public getLeftSide():Observable<LeftSide>{
    const url:string="http://localhost:60845/api/json/LeftSide";

     return this.http.get(url,{}) as Observable<LeftSide>;
  }


}
