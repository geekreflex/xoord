import { fabric } from 'fabric';

export class History {
  private canvas: fabric.Canvas;

  constructor(canvas: fabric.Canvas) {
    this.canvas = canvas;
    this.init();
  }

  init() {
    this.canvas.on('object:added', () => this.pushState);
    this.canvas.on('object:removed', () => this.pushState());
    this.canvas.on('object:modified', () => this.pushState());
  }

  public pushState() {}

  public undo() {}

  public redo() {}

  public canUndo() {}

  public canRedo() {}
}
