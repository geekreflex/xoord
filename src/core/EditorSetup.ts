import { fabric } from 'fabric';
import { throttle } from 'lodash-es';
import { Controls } from './Controls';

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
      width: 200,
      height: 200,
      fill: '#090909',
      stroke: '#555555',
      strokeWidth: 1,
      strokeUniform: true,
    });
    this.canvas.add(rect).centerObject(rect);
    this.canvas.setActiveObject(rect);
    this.canvas.renderAll();
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
