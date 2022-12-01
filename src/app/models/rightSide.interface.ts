import { image } from "./leftSide.interface";

export interface value{
    id:string;
    value:string;
    url:String;
}

export interface detail{
    title:string;
    value:value[];
}
export interface place2{
    0:string;
    1:string;
    2:string;
    3:string;
}
export interface place{
    lif:string;
    places:place2[];
    point:string;

}
export interface pointer{
   icon:string;
   latitude: string;
   longitude:string;
   title:string;
}
export interface map{
pointers:pointer[];
places:place[];
}
export interface link{
title:string;
value:value[];
}
export interface image2{

}
export interface MyElement{
    details:detail[];
    map:map;
    links:link;
    id:string;
    lastName:string;
    firstName:string;
    birthdate:String;
    placeOfResidence:string;
    source:string;
    url:string;
    title:string;
    text:string;
    description:string;
    credit:string;
    images:any;
}

export interface rightSide{
    title:string;
    url:string;
    urlTitle:string;
    type:string;
     elements:MyElement;
  }