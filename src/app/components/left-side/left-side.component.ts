import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { from } from 'rxjs';
import { LeftSideService } from 'src/app/serices/left-side.service';
import { LeftSide } from '../../models/leftSide.interface';



@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss']
})
export class LeftSideComponent implements OnInit {
  
  constructor(private api:LeftSideService ){

  }
  public leftSide!: LeftSide;

  ngOnInit(): void {
    this.api.getLeftSide().subscribe(data => {
      console.log(data);
      console.log(typeof data)
      this.leftSide = data;
      console.log(this.leftSide.mainImage.url)
    });
  }

// public leftSide:LeftSide = {
 
 
  
// }
 
}
