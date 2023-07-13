import { Injectable } from '@angular/core';
import { ColorService } from './color.service';
import { ToolService } from './tool.service';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  

  private canvasContext!: CanvasRenderingContext2D;

  constructor(private colorService:ColorService, private toolService:ToolService) { }


  getCanvasContext():CanvasRenderingContext2D{
    return this.canvasContext;
  };

  setCanvasContext(newCanvasContext:CanvasRenderingContext2D):void{
    this.canvasContext = newCanvasContext;
  };

  newCanvas():void{
    const canvasRef = this.canvasContext.canvas;
    this.canvasContext.clearRect(0, 0, canvasRef.width, canvasRef.height);

    this.drawGrid(this.canvasContext,40);

  };

  saveCanvas():void{
    const canvasRef = this.canvasContext.canvas;
    let dataUrl = canvasRef.toDataURL();
    let a = document.createElement('a');
    a.href = dataUrl;

    a.download = 'canvas-download.png';
    a.click();
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

   if(this.toolService.getActiveTool().includes('pen')){
    context.fillStyle=color;
    
   }else if(this.toolService.getActiveTool().includes('eraser')){
    context.fillStyle="white";
   }

    context.fillRect(x,y,cellWidth,cellWidth);
  }

  

}
