import { fabric } from 'fabric';
import { throttle } from 'lodash-es';
import { Controls } from './Controls';
import './lib/history.js';
import { AlignGuidelines } from './AlignGuidelines.js';

declare type ExtCanvas = fabric.Canvas & {
  isDragging: boolean;
  lastPosX: number;
  lastPosY: number;
};

export class EditorSetup {
  public canvas: fabric.Canvas;
  public workspaceEl: HTMLElement;
  private resizeObserver: ResizeObserver | null;
  public panMode: boolean;

  constructor(canvas: fabric.Canvas, workspaceEl: HTMLElement) {
    this.canvas = canvas;
    this.workspaceEl = workspaceEl;
    this.resizeObserver = null;
    this.panMode = false;

    this.initControls();
    this.initEditor();
    this.initResizeObserver();

    this.initZoom();
    this.initPan();
    this.initEvent();
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

  public zoomToFit() {
    const boudingBox = this.canvas.getObjects().reduce(
      function (acc, obj) {
        return fabric.util.object.extend(acc, obj.getBoundingRect());
      },
      { left: Infinity, top: Infinity, width: 0, height: 0 }
    );

    const scaleX = this.canvas.getWidth() / boudingBox.width;
    const scaleY = this.canvas.getHeight() / boudingBox.height;
    const scale = Math.min(scaleX, scaleY);

    this.canvas.setZoom(scale);
    this.canvas.setViewportTransform([scale, 0, 0, scale, 0, 0]);
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
    this.canvas.on('mouse:down', function (this: ExtCanvas, opt) {
      const evt = opt.e;
      if (evt.altKey || This.panMode) {
        This.canvas.defaultCursor = 'grabbing';
        This.canvas.discardActiveObject();
        This.setPan();
        this.selection = false;
        this.isDragging = true;
        this.lastPosX = evt.clientX;
        this.lastPosY = evt.clientY;
        this.requestRenderAll();
      }
    });

    this.canvas.on('mouse:move', function (this: ExtCanvas, opt) {
      if (this.isDragging) {
        This.canvas.discardActiveObject();
        This.canvas.defaultCursor = 'grabbing';
        const { e } = opt;
        if (!this.viewportTransform) return;
        const vpt = this.viewportTransform;
        vpt[4] += e.clientX - this.lastPosX;
        vpt[5] += e.clientY - this.lastPosY;
        this.lastPosX = e.clientX;
        this.lastPosY = e.clientY;
        this.requestRenderAll();
      }
    });

    this.canvas.on('mouse:up', function (this: ExtCanvas) {
      if (!this.viewportTransform) return;
      this.setViewportTransform(this.viewportTransform);
      this.isDragging = false;
      this.selection = true;
      this.getObjects().forEach((obj) => {
        if (obj.hasControls) {
          obj.selectable = true;
        }
      });
      this.requestRenderAll();
      This.canvas.defaultCursor = 'default';
    });
  }

  private setPan() {
    this.canvas.selection = false;
    this.canvas.defaultCursor = 'grab';
    this.canvas.getObjects().forEach((obj) => {
      obj.selectable = false;
    });
    this.canvas.renderAll();
    this.canvas.requestRenderAll();
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

  public initEvent() {
    // Select object using right click
    this.canvas.discardActiveObject();
    this.canvas.on('mouse:down', (event) => {
      if (event.e.button === 2) {
        const object = event.target;
        if (object) {
          this.canvas.setActiveObject(object);
        }
      }
    });
  }
}
