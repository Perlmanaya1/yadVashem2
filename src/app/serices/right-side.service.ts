import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { rightSide } from '../models/rightSide.interface';

@Injectable({
  providedIn: 'root'
})
export class RightSideService {

  constructor(private http:HttpClient) { }

  public getRightSide():Observable<Array<rightSide>>{
    const url:string="http://localhost:60845/api/json/RightSide";

     return this.http.get(url,{}) as Observable<Array<rightSide>>;
  }
}
