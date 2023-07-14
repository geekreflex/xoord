import { fabric } from 'fabric';

export class EditorSetup {
  public canvas: fabric.Canvas;
  constructor(canvas: fabric.Canvas) {
    this.canvas = canvas;
  }
}
