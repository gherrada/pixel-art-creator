import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { CanvasService } from 'src/app/shared/services/canvas.service';
import { ColorService } from 'src/app/shared/services/color.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})


export class CanvasComponent implements OnInit {


  constructor(private colorService:ColorService,private canvasService:CanvasService){}


  @ViewChild('canvas',{static:true}) canvas!:ElementRef;
  @ViewChild('grid',{static:true}) grid!:ElementRef;


  ngOnInit():void{
    const canvas:HTMLCanvasElement = this.canvas.nativeElement;
    const context = canvas.getContext('2d');

    const grid:HTMLCanvasElement = this.grid.nativeElement;
    const gridContext = grid.getContext('2d');


    if(gridContext){
      this.canvasService.drawGrid(gridContext,40);
 
    }


    if(context){
      this.canvasService.setCanvasContext(context);


    }

  }

  drawHandler(event:MouseEvent){
    console.log("got a click on canvas");
    console.log('x is: '+ event.offsetX);

    let pixelSize = 40;
    let x = pixelSize*Math.floor(event.offsetX/pixelSize);
    let y = pixelSize*Math.floor(event.offsetY/pixelSize);
  

    this.canvasService.drawPixel(this.canvas.nativeElement.getContext('2d'),pixelSize,x,y);
  }


}
