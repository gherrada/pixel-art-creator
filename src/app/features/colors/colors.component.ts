import { Component } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})


export class ColorsComponent {

  public coloractive:String='#f3f3f3';

  constructor(){}

  changeColor(event:any){

    let element = event.target||event.srcElement||event.currentTarget;
    let elementId = element.id;
    this.coloractive=elementId;
  
  }


}
