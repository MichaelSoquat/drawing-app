import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.scss']
})
export class DrawingComponent implements OnInit {

  @Input() clearCanvasEvent: any;
  constructor() { }

  ngOnInit() {
  }

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;


  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.lineWidth = 3;
    this.ctx.lineCap = 'round';

    this.canvas.nativeElement.addEventListener('mousedown', (event) => {
      this.ctx.beginPath();
      this.ctx.moveTo(event.offsetX, event.offsetY);

      this.canvas.nativeElement.addEventListener('mousemove', this.draw);
    });

    this.canvas.nativeElement.addEventListener('mouseup', () => {
      this.canvas.nativeElement.removeEventListener('mousemove', this.draw);
    });
  }

  draw = (event) => {
    this.ctx.lineTo(event.offsetX, event.offsetY);
    this.ctx.stroke();
  }

  setLineWidth(lineWidth: number) {
    this.ctx.lineWidth = lineWidth;
  }

  setColor(color: string) {
    this.ctx.strokeStyle = color;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }
}
