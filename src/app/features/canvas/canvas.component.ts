import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})


export class CanvasComponent implements OnInit {

  @ViewChild('canvas',{static:true}) canvas!:ElementRef;
  
  ngOnInit():void{
    const canvas:HTMLCanvasElement = this.canvas.nativeElement;
    const context = canvas.getContext('2d');

    if(context){
      this.#drawRectangle(context)
    }

  }

  #drawRectangle(context:CanvasRenderingContext2D){
    context.fillRect(20,20,100,100);
  }




}
