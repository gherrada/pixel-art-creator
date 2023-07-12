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
  
  ngOnInit():void{
    const canvas:HTMLCanvasElement = this.canvas.nativeElement;
    const context = canvas.getContext('2d');


    if(context){
      this.canvasService.setCanvasContext(context);

      this.drawGrid(context,40);
      //context.fillStyle="red";
      //this.#drawRectangle(context);

    }

  }

  drawHandler(event:MouseEvent){
    console.log("got a click on canvas");
    console.log('x is: '+ event.offsetX);

    let pixelSize = 40;
    let x = pixelSize*Math.floor(event.offsetX/pixelSize);
    let y = pixelSize*Math.floor(event.offsetY/pixelSize);
  

    this.drawPixel(this.canvas.nativeElement.getContext('2d'),pixelSize,x,y);
  }

  #drawRectangle(context:CanvasRenderingContext2D){
    context.fillRect(20,20,100,100);
    this.drawPixel(context,40,40,1);
  }

   drawGrid(c:CanvasRenderingContext2D, cellWidth:number) {

    const boxes:number= Math.floor(c.canvas.width/cellWidth);
    
    c.beginPath();
    c.fillStyle = "white";
    c.lineWidth = 3;
    c.strokeStyle = 'black';
    for (var row = 0; row < boxes; row++) {
      for (var column = 0; column < boxes; column++) {
        var x = column * cellWidth;
        var y = row * cellWidth;
        c.rect(x, y, cellWidth, cellWidth);
        c.fill();
        c.stroke();
      }
    }
    c.closePath();
  }

  drawPixel(context:CanvasRenderingContext2D,cellWidth:number,x:number, y:number){
    let color:string = this.colorService.getActiveColor();

    console.log(color);
    context.fillStyle=color;
    context.fillRect(x,y,cellWidth,cellWidth);
  }




}
