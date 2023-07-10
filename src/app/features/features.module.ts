import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasComponent } from './canvas/canvas.component';
import { ToolsComponent } from './tools/tools.component';
import { ColorsComponent } from './colors/colors.component';
import { ControlsComponent } from './controls/controls.component';



@NgModule({
  declarations: [
    CanvasComponent,
    ToolsComponent,
    ColorsComponent,
    ControlsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CanvasComponent,ToolsComponent,
  ]
})
export class FeaturesModule { }
