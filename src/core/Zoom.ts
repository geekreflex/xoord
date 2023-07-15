import { fabric } from 'fabric';

export class Zoom {
  private canvas: fabric.Canvas;

  constructor(canvas: fabric.Canvas) {
    this.canvas = canvas;

    this.initZoom();
  }

  private initZoom() {
    this.canvas.on('mouse:wheel', function (this: fabric.Canvas, opt) {
      // Check if ctrl or cmd key is held down
      const isControlKeyHeld = opt.e.ctrlKey || opt.e.metaKey;
      const delta = opt.e.deltaY;
      let zoom = this.getZoom();
      zoom *= 0.999 ** delta;

      // Set minimum and maximum zoom values
      const minZoom = 0.1;
      const maxZoom = 6;
      zoom = Math.max(minZoom, Math.min(maxZoom, zoom));

      if (isControlKeyHeld) {
        // Zoom to cursor
        this.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
      } else {
        // Zoom to center
        const center = this.getCenter();
        this.zoomToPoint(new fabric.Point(center.left, center.top), zoom);
      }
      opt.e.preventDefault();
      opt.e.stopPropagation();
    });
  }

  public setZoom(scale: number) {
    const center = this.canvas.getCenter();
    this.canvas.setViewportTransform(fabric.iMatrix.concat());
    this.canvas.zoomToPoint(new fabric.Point(center.left, center.top), scale);
  }

  public zoomIn() {
    const zoomFactor = 1.1;
    const zoom = this.canvas.getZoom() * zoomFactor;
    this.setZoom(Math.min(zoom, 6));
  }

  public zoomOut() {
    const zoomFactor = 0.9;
    const zoom = this.canvas.getZoom() * zoomFactor;
    this.setZoom(Math.max(zoom, 0.1));
  }
}
