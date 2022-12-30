import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.scss']
})
export class DrawingComponent implements OnInit {

  isSmiley = false;
  dragging = false;
  @Input() clearCanvasEvent: any;
  constructor() { }

  ngOnInit() {
  }

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  bgColor = '#808080';
  smiley = '😀';
  currentSmileyPosition = { x: 100, y: 100 };



  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.lineWidth = 3;
    this.ctx.lineCap = 'round';
    this.ctx.fillStyle = '#808080';
    this.ctx.fillRect(0, 0, this.canvas.nativeElement.width + 10, this.canvas.nativeElement.height + 10);
    this.canvas.nativeElement.addEventListener('mousedown', (event) => {
      console.log('mousedown', event.offsetX, event.offsetY);
      if (this.isMouseOverSmiley(event)) {
        this.dragImg();
      }
      else {
        this.startDraw(event);
      }

    });
  }

  isMouseOverSmiley(event) {
    return event.offsetX >= this.currentSmileyPosition.x + 5 && event.offsetX <= this.currentSmileyPosition.x + 35 &&
      event.offsetY >= this.currentSmileyPosition.y - 25 && event.offsetY <= this.currentSmileyPosition.y + 5 && this.isSmiley
  }


  dragImg() {
    this.dragging = true;
    this.canvas.nativeElement.addEventListener('mousemove', (event) => {
      if (this.dragging) {
        this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
        this.setBgColor(this.bgColor);
        this.ctx.font = '30px Arial';
        this.ctx.fillText(this.smiley, event.offsetX, event.offsetY);
      }
    }
    );
    this.canvas.nativeElement.addEventListener('mouseup', (event) => {
      this.currentSmileyPosition.x = event.offsetX;
      this.currentSmileyPosition.y = event.offsetY;
      console.log(this.currentSmileyPosition)
      this.dragging = false;
      
    }
    );
  }

  startDraw = (event) => {
    this.ctx.beginPath();
    this.ctx.moveTo(event.offsetX, event.offsetY);
    this.canvas.nativeElement.addEventListener('mousemove', this.draw);
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

  setBgColor(color: string) {
    this.bgColor = color;
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }

  setSmiley(smiley: string) {
    this.ctx.font = '30px Arial';
    this.ctx.fillText(smiley, 100, 100);
    this.smiley = smiley;
    this.isSmiley = true;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }
}
