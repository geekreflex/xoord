import { fabric } from 'fabric';
import { throttle } from 'lodash-es';
import { Controls } from './Controls';
import { AlignGuidelines } from './AligningGuidelines';

declare type EditorOption = { width: number; height: number };

export class Editor {
  canvas: fabric.Canvas;
  workspaceEl: HTMLElement;
  workspace: fabric.Rect | null;
  option: EditorOption;
  dragMode: boolean;
  private resizeObserver: ResizeObserver | null;

  constructor(
    canvas: fabric.Canvas,
    workspaceEl: HTMLElement,
    option: EditorOption
  ) {
    this.canvas = canvas;
    this.workspaceEl = workspaceEl;
    this.workspace = null;
    this.option = option;
    this.dragMode = false;
    this.resizeObserver = null;

    this.initBackground();
    this.initWorkspace();
    this.initResizeObserver();
    this.initControls();
  }

  private initBackground() {
    this.canvas.setBackgroundColor(
      '#888',
      this.canvas.renderAll.bind(this.canvas)
    );
  }

  private initWorkspace() {
    const { width, height } = this.option;
    const workspace = new fabric.Rect({
      fill: '#ffffff',
      width,
      height,
      id: 'workspace',
    });
    workspace.set('selectable', false);
    workspace.set('hasControls', false);
    workspace.hoverCursor = 'default';
    this.canvas.add(workspace);
    this.canvas.renderAll();

    this.workspace = workspace;
    this.auto();
  }

  private initControls() {
    new Controls(this.canvas);
    new AlignGuidelines({ canvas: this.canvas }).init();
  }

  private auto() {
    this.zoomToFit();
  }

  private setCenterFromObject(obj: fabric.Rect) {
    const { canvas } = this;
    const objCenter = obj.getCenterPoint();
    const viewportTransform = canvas.viewportTransform;
    if (
      canvas.width === undefined ||
      canvas.height === undefined ||
      !viewportTransform
    )
      return;
    viewportTransform[4] =
      canvas.width / 2 - objCenter.x * viewportTransform[0];
    viewportTransform[5] =
      canvas.height / 2 - objCenter.y * viewportTransform[3];
    canvas.setViewportTransform(viewportTransform);
    canvas.renderAll();
  }

  private initResizeObserver() {
    this.resizeObserver = new ResizeObserver(
      throttle(() => {
        this.auto();
      }, 50)
    );
    this.resizeObserver.observe(this.workspaceEl);
  }

  public setZoomAuto(
    scale: number,
    cb?: (left?: number, top?: number) => void
  ) {
    const { workspaceEl } = this;
    const width = workspaceEl.offsetWidth;
    const height = workspaceEl.offsetHeight;
    this.canvas.setWidth(width);
    this.canvas.setHeight(height);
    const center = this.canvas.getCenter();
    this.canvas.setViewportTransform(fabric.iMatrix.concat());
    this.canvas.zoomToPoint(new fabric.Point(center.left, center.top), scale);
    if (!this.workspace) return;
    this.setCenterFromObject(this.workspace);

    this.workspace.clone((cloned: fabric.Rect) => {
      this.canvas.clipPath = cloned;
      this.canvas.requestRenderAll();
    });
    if (cb) cb(this.workspace.left, this.workspace.top);
  }

  public zoomToFit(offset: number = 100) {
    if (!this.workspace) return;

    // Get the dimensions of the workspace rectangle
    const workspaceWidth = this.workspace.width!;
    const workspaceHeight = this.workspace.height!;

    // Calculate the available space within the canvas
    const canvasWidth = this.canvas.getWidth();
    const canvasHeight = this.canvas.getHeight();

    // Calculate the scaling factor to fit the workspace within the available space
    const scaleFactor = Math.min(
      (canvasWidth - offset * 2) / workspaceWidth,
      (canvasHeight - offset * 2) / workspaceHeight
    );

    // Apply the zoom and translation to the canvas
    this.setZoomAuto(scaleFactor);
  }

  public dispose() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }

    if (this.canvas) {
      this.canvas.dispose();
    }
  }
}
