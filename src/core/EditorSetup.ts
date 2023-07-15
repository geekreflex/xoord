import { fabric } from 'fabric';
import { throttle } from 'lodash-es';
import { Controls } from './Controls';
import './lib/history.js';
import { AlignGuidelines } from './AlignGuidelines.js';

export class EditorSetup {
  public canvas: fabric.Canvas;
  private workspaceEl: HTMLElement;
  private resizeObserver: ResizeObserver | null;

  constructor(canvas: fabric.Canvas, workspaceEl: HTMLElement) {
    this.canvas = canvas;
    this.workspaceEl = workspaceEl;
    this.resizeObserver = null;

    this.initControls();
    this.initEditor();
    this.initResizeObserver();
    this.addTest();
    this.addTest2();

    this.initZoom();
  }

  private initEditor() {
    const { workspaceEl } = this;
    const width = workspaceEl.offsetWidth;
    const height = workspaceEl.offsetHeight;
    this.canvas.setWidth(width);
    this.canvas.setHeight(height);
  }

  private initControls() {
    new Controls(this.canvas);
    new AlignGuidelines({ canvas: this.canvas }).init();
  }

  private initResizeObserver() {
    this.resizeObserver = new ResizeObserver(
      throttle(() => {
        this.initEditor();
      }, 50)
    );
    this.resizeObserver.observe(this.workspaceEl);
  }

  private addTest() {
    const rect = new fabric.Rect({
      width: 100,
      height: 100,
      fill: '#090909',
      stroke: '#555555',
      strokeWidth: 1,
      strokeUniform: true,
    });
    this.canvas.add(rect).centerObject(rect.setCoords());
    this.canvas.setActiveObject(rect);
    this.canvas.renderAll();
  }

  private addTest2() {
    const rect = new fabric.Rect({
      width: 100,
      height: 100,
      fill: '#e911e3',
      stroke: '#555555',
      strokeWidth: 1,
      strokeUniform: true,
    });

    this.canvas.add(rect).centerObject(rect.setCoords());
    this.canvas.setActiveObject(rect);
    this.canvas.renderAll();
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

  public dispose() {
    if (this.canvas) {
      this.canvas.dispose();
    }

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }
}
