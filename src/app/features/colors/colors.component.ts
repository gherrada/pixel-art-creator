import { Component } from '@angular/core';
import { ColorService } from 'src/app/shared/services/color.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})


export class ColorsComponent {

  public coloractive:String='#f3f3f3';

  colors:string[] =["green","blue","red","yellow","orange","black","white"];

  constructor(private colorService:ColorService){}

  changeColor(event:any){

    let element = event.target||event.srcElement||event.currentTarget;
    let elementId = element.id;

    this.colorService.setActiveColor(elementId);
    
    this.coloractive=elementId;
  
  }


}
