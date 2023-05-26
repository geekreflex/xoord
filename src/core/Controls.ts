import { fabric } from 'fabric';

export class Controls {
  canvas: fabric.Canvas;
  constructor(canvas: fabric.Canvas) {
    this.canvas = canvas;
  }

  initControls() {}

  drawImg(
    ctx: CanvasRenderingContext2D,
    left: number,
    top: number,
    img: HTMLImageElement,
    wSize: number,
    hSize: number,
    angle: number | undefined
  ) {}

  renderIconEdge(
    ctx: CanvasRenderingContext2D,
    left: number,
    top: number,
    styleOverride: any,
    fabricObject: fabric.Object
  ) {}
}
