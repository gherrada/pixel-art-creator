import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private activeColor:string="";

  constructor() {
    this.activeColor = '#f3f3f3';
   }

  getActiveColor(){
    return this.activeColor;
  }

  setActiveColor(color:string){
    this.activeColor = color;
  }
}
