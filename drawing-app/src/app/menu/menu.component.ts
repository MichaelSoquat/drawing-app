import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() clearCanvasEvent: EventEmitter<any> = new EventEmitter<any>();

  @Output() lineWidthChange = new EventEmitter<number>();
  @Output() colorChange = new EventEmitter<string>();
  @Output() remove = new EventEmitter();
  @Output() backgroundColorChange = new EventEmitter<string>();
  @Output() smiley = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  clearCanvas() {
    this.remove.emit();
  }

  changeLineWidth(lineWidth: number) {
    this.lineWidthChange.emit(lineWidth);
  }

  changeColor(color: string) {
    this.colorChange.emit(color);
  }

  changeBackgroundColor(color: string) {
    this.backgroundColorChange.emit(color);
  }

  selectSmiley(smiley: string) {
    this.smiley.emit(smiley);
  }


}
