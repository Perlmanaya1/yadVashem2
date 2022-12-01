import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { link, rightSide } from 'src/app/models/rightSide.interface';
import { RightSideService } from 'src/app/serices/right-side.service';
import {  } from '@angular/material/';
import { ThemePalette } from '@angular/material/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.scss']
})
export class RightSideComponent {
  
  constructor(private api:RightSideService ){

  }
  public rightSides!: Array<rightSide> | [];
  public links:any; 
  public  activeLink:any;
  selected = new FormControl(0);
  public indexR:number=0;
  public indexP:any;
  public indexN:any;

  
  fillLinks() { 
    for (const element of this.rightSides) {
      if(element.title != this.rightSides[0].title)
        this.links.push(element.title);
      }
  } 
  ngOnInit(): void {
    this.api.getRightSide().subscribe(data => {
      console.log(data);
      console.log(typeof data)
      this.rightSides = data;
      console.log(this.rightSides[0].elements.details)
      this.links= [this.rightSides[0].title];
      this.activeLink = this.links[0];
      this.fillLinks();
      this.fills();
    });
  }
  fills() {
    var mone = 0;
    for (const element of this.rightSides) {
      if(element.title == "RESCUE")
        this.indexR = mone;
      if(element.title == "PHOTOS")
      this.indexP = mone;
      if(element.title == "Names")
      this.indexP = mone;
      }
      mone ++;
      }
      
       
    }
     
  







