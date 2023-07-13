import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  constructor() { }

  activeTool:string="pen-tool";

  setActiveTool(toolId:string){
    this.activeTool=toolId;
  }

  getActiveTool(){
    return this.activeTool;
  }

}
