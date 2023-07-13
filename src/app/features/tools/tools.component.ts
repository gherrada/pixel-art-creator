import { Component } from '@angular/core';
import { ToolService } from 'src/app/shared/services/tool.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})


export class ToolsComponent {

constructor(private toolService:ToolService){}

setActiveTool(toolId:string){
  this.toolService.setActiveTool(toolId);
}
}
