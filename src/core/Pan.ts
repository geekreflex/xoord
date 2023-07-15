/**
 * Pan controls
 */

import { fabric } from 'fabric';

declare type ExtCanvas = fabric.Canvas & {
  isDragging: boolean;
  lastPosX: number;
  lastPosY: number;
};

export class Pan {
  private canvas: fabric.Canvas;
  public panMode: boolean;

  constructor(canvas: fabric.Canvas) {
    this.canvas = canvas;
    this.panMode = false;
  }

  public startPan() {
    this.panMode = true;
    this.canvas.defaultCursor = 'grab';
  }

  public endPan() {
    this.panMode = false;
    this.canvas.defaultCursor = 'default';
  }

  private initPan() {
    const This = this;
    this.canvas.on('mouse:down', function (this: ExtCanvas, opt) {});
  }
}
