import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.scss']
})
export class DrawingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;

}
