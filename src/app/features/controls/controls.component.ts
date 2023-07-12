import { Component } from '@angular/core';
import { CanvasService } from 'src/app/shared/services/canvas.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {

  constructor(private canvasService:CanvasService){}

  saveCanvasHandler(){
    this.canvasService.saveCanvas();
  }

  newCanvasHandler(){
    this.canvasService.newCanvas();
  }

}
