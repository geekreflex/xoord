import { fabric } from 'fabric';
import { throttle } from 'lodash-es';
import { Controls } from './Controls';
import { AlignGuidelines } from './AligningGuidelines';
import 'fabric-history';
import { getBoundingRect } from './helper/object';

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

    this.initEvents();
    this.initZoom();
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
      fill: '#222',
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

  public setBackgroundImage(imageUrl: string) {
    const { canvas } = this;
    const workspace = this.workspace;

    // Load the background image;
    fabric.Image.fromURL(imageUrl, (img) => {
      const scaleX = workspace!.width! / img.width!;
      const scaleY = workspace!.height! / img.height!;

      const scale = Math.max(scaleX, scaleY);

      workspace?.set({
        fill: new fabric.Pattern({
          source: img.getElement() as HTMLImageElement,
          repeat: 'no-repeat',
          offsetX: workspace!.left!,
          offsetY: workspace!.top!,
          patternTransform: [
            scale,
            0,
            0,
            scale,
            workspace!.left!,
            workspace!.top!,
          ],
        }),
      });
      canvas.renderAll();
    });
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

  public zoomToFill(offset: number = 100) {
    if (!this.workspace) return;

    // Get the dimensions of the workspace rectangle
    const workspaceWidth = this.workspace.width!;
    const workspaceHeight = this.workspace.height!;

    // Calculate the available space within the canvas
    const canvasWidth = this.canvas.getWidth();
    const canvasHeight = this.canvas.getHeight();

    // Calculate the scaling factor to fit the workspace within the available space
    const scaleFactor = Math.max(
      (canvasWidth - offset * 2) / workspaceWidth,
      (canvasHeight - offset * 2) / workspaceHeight
    );

    // Apply the zoom and translation to the canvas
    this.setZoomAuto(scaleFactor);
  }

  public zoomToSelection() {
    // TODO ::: Important

    const zoom = 2;
    const activeSelection = this.canvas.getActiveObject();
    const selectedObjects = this.canvas.getActiveObjects();

    if (selectedObjects.length > 0) {
      const boundingRect = getBoundingRect(selectedObjects);

      if (boundingRect) {
        const canvasCenterX = this.canvas.width! / 2;
        const canvasCenterY = this.canvas.height! / 2;

        const boundingBoxCenterX = boundingRect.left! + boundingRect.width! / 2;
        const boundingBoxCenterY = boundingRect.top! + boundingRect.height! / 2;

        const zoomedBoundingBoxWidth = boundingRect.width! * zoom;
        const zoomedBoundingBoxHeight = boundingRect.height! * zoom;

        const newLeft =
          canvasCenterX -
          boundingBoxCenterX * zoom -
          zoomedBoundingBoxWidth / 2;
        const newTop =
          canvasCenterY -
          boundingBoxCenterY * zoom -
          zoomedBoundingBoxHeight / 2;

        this.canvas.setViewportTransform([zoom, 0, 0, zoom, newLeft, newTop]);
        this.canvas.setZoom(zoom);
      }
    }

    if (activeSelection) {
      const canvasCenterX = this.canvas.width! / 2;
      const canvasCenterY = this.canvas.height! / 2;

      const newLeft =
        canvasCenterX -
        activeSelection.left! * zoom -
        (activeSelection.width! * zoom) / 2;
      const newTop =
        canvasCenterY -
        activeSelection.top! * zoom -
        (activeSelection.height! * zoom) / 2;

      this.canvas.setViewportTransform([zoom, 0, 0, zoom, newLeft, newTop]);
      this.canvas.setZoom(zoom);
    }
  }

  /**
   * We reset workspace to it's default behavior
   * by removing the controls and disabling select
   * after we perform undo/redo
   */
  public resetWorkspace() {
    const workspace = this.canvas.getObjects()[0];
    if (workspace) {
      workspace.hoverCursor = 'default';
      workspace.set('selectable', false);
      workspace.set('hasControls', false);
      this.canvas.renderAll();
    }
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

  private initEvents() {
    this.canvas.on('mouse:over', (opt) => {
      const object = opt.target;
      if (!object || object?.id === 'workspace') {
        return;
      }
    });

    this.canvas.on('selection:created', (e) => {
      const selected = e.selected;
      selected?.forEach((obj) => {
        if (obj instanceof fabric.Textbox) {
          obj.setControlsVisibility({
            mt: false,
            mb: false,
            ml: false,
            tr: false,
            bl: false,
            br: false,
          });
        }
      });
      this.canvas.renderAll();
    });
  }

  private initZoom() {
    this.canvas.on('mouse:wheel', function (this: fabric.Canvas, opt) {
      // check if ctrl or cmd key is held down
      const isControlKeyHeld = opt.e.ctrlKey || opt.e.metaKey;

      const delta = opt.e.deltaY;
      let zoom = this.getZoom();
      zoom *= 0.999 ** delta;

      // Set minimum and maximum zoom values
      const minZoom = 0.1;
      const maxZoom = 20;
      zoom = Math.max(minZoom, Math.min(maxZoom, zoom));

      if (isControlKeyHeld) {
        /**
         * Zoom to cursor
         */
        this.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
      } else {
        /**
         * Zoom to center
         */
        const center = this.getCenter();
        this.zoomToPoint(new fabric.Point(center.left, center.top), zoom);
      }
      opt.e.preventDefault();
      opt.e.stopPropagation();
    });
  }
}
