import { fabric } from 'fabric';
import verticalImg from '@/assets/editor/middlecontrol.svg';
import horizontalImg from '@/assets/editor/middlecontrolhoz.svg';
import edgeImg from '@/assets/editor/edgecontrol.svg';
import rotateImg from '@/assets/editor/rotateicon.svg';
import { scaleXOnly } from '../lib/scale';

export class CustomControls {
  canvas: fabric.Canvas;

  constructor(canvas: fabric.Canvas) {
    this.canvas = canvas;
    this.initDefault();
    this.setupPeakControl();
    this.setupIntervalControl();
    this.setupRotationControl();
  }

  private initDefault() {
    fabric.Object.prototype.set({
      transparentCorners: false,
      borderColor: '#51B9F9',
      cornerColor: '#FFF',
      borderScaleFactor: 1,
      cornerStyle: 'circle',
      cornerStrokeColor: '#0E98FC',
      borderOpacityWhenMoving: 1,
      // padding: 10,
      rotatingPointOffset: 40,
    });
  }

  private drawImage(
    ctx: CanvasRenderingContext2D,
    left: number,
    top: number,
    img: HTMLImageElement,
    width: number,
    height: number,
    angle: number | undefined
  ) {
    if (angle === undefined) return;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(angle));
    ctx.drawImage(img, -width / 2, -height / 2, width, height);
    ctx.restore();
  }

  private setupIntervalControl() {
    const verticalImgIcon = new Image();
    verticalImgIcon.src = verticalImg;

    const horizontalImgIcon = new Image();
    horizontalImgIcon.src = horizontalImg;

    const renderVerticalIcon = (
      ctx: CanvasRenderingContext2D,
      left: number,
      top: number,
      _styleOverride: any,
      fabricObject: fabric.Object
    ) => {
      this.drawImage(
        ctx,
        left,
        top,
        verticalImgIcon,
        20,
        25,
        fabricObject.angle
      );
    };

    const renderHorizontalIcon = (
      ctx: CanvasRenderingContext2D,
      left: number,
      top: number,
      _styleOverride: any,
      fabricObject: fabric.Object
    ) => {
      this.drawImage(
        ctx,
        left,
        top,
        horizontalImgIcon,
        25,
        20,
        fabricObject.angle
      );
    };

    fabric.Object.prototype.controls.ml = new fabric.Control({
      x: -0.5,
      y: 0,
      offsetX: -1,
      cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
      actionHandler: fabric.controlsUtils.scalingXOrSkewingY,
      getActionName: fabric.controlsUtils.scaleOrSkewActionName,
      render: renderVerticalIcon.bind(this),
    });

    fabric.Object.prototype.controls.mr = new fabric.Control({
      x: 0.5,
      y: 0,
      offsetX: 1,
      cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
      actionHandler: fabric.controlsUtils.scalingXOrSkewingY,
      getActionName: fabric.controlsUtils.scaleOrSkewActionName,
      render: renderVerticalIcon.bind(this),
    });

    fabric.Object.prototype.controls.mb = new fabric.Control({
      x: 0,
      y: 0.5,
      offsetY: 1,
      cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
      actionHandler: fabric.controlsUtils.scalingYOrSkewingX,
      getActionName: fabric.controlsUtils.scaleOrSkewActionName,
      render: renderHorizontalIcon.bind(this),
    });

    fabric.Object.prototype.controls.mt = new fabric.Control({
      x: 0,
      y: -0.5,
      offsetY: -1,
      cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
      actionHandler: fabric.controlsUtils.scalingYOrSkewingX,
      getActionName: fabric.controlsUtils.scaleOrSkewActionName,
      render: renderHorizontalIcon.bind(this),
    });

    /**
     * Textbox controls
     */

    fabric.Textbox.prototype.controls.mr = new fabric.Control({
      x: 0.5,
      y: 0,
      offsetX: 1,
      cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
      actionHandler: scaleXOnly,
      getActionName: fabric.controlsUtils.scaleOrSkewActionName,
      render: renderVerticalIcon.bind(this),
    });
  }

  private setupPeakControl() {
    const img = new Image();
    img.src = edgeImg;

    const renderPeakIcon = (
      ctx: CanvasRenderingContext2D,
      left: number,
      top: number,
      _styleOverride: any,
      fabricObject: fabric.Object
    ) => {
      this.drawImage(ctx, left, top, img, 25, 25, fabricObject.angle);
    };

    fabric.Object.prototype.controls.tl = new fabric.Control({
      x: -0.5,
      y: -0.5,
      cursorStyleHandler: fabric.controlsUtils.scaleCursorStyleHandler,
      actionHandler: fabric.controlsUtils.scalingEqually,
      render: renderPeakIcon.bind(this),
    });

    fabric.Object.prototype.controls.bl = new fabric.Control({
      x: -0.5,
      y: 0.5,
      cursorStyleHandler: fabric.controlsUtils.scaleCursorStyleHandler,
      actionHandler: fabric.controlsUtils.scalingEqually,
      render: renderPeakIcon.bind(this),
    });

    fabric.Object.prototype.controls.tr = new fabric.Control({
      x: 0.5,
      y: -0.5,
      cursorStyleHandler: fabric.controlsUtils.scaleCursorStyleHandler,
      actionHandler: fabric.controlsUtils.scalingEqually,
      render: renderPeakIcon.bind(this),
    });

    fabric.Object.prototype.controls.br = new fabric.Control({
      x: 0.5,
      y: 0.5,
      cursorStyleHandler: fabric.controlsUtils.scaleCursorStyleHandler,
      actionHandler: fabric.controlsUtils.scalingEqually,
      render: renderPeakIcon.bind(this),
    });

    fabric.Textbox.prototype.controls.tl = new fabric.Control({
      x: -0.5,
      y: -0.5,
      offsetX: -1,
      cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
      actionHandler: fabric.controlsUtils.scalingEqually,
      getActionName: fabric.controlsUtils.scaleOrSkewActionName,
      render: renderPeakIcon.bind(this),
    });
  }

  private setupRotationControl() {
    const img = new Image();
    img.src = rotateImg;

    const renderRotationIcon = (
      ctx: CanvasRenderingContext2D,
      left: number,
      top: number,
      _styleOverride: any,
      fabricObject: fabric.Object
    ) => {
      this.drawImage(ctx, left, top, img, 40, 40, fabricObject.angle);
    };

    fabric.Object.prototype.controls.mtr = new fabric.Control({
      x: 0,
      y: 0.5,
      cursorStyleHandler: fabric.controlsUtils.rotationStyleHandler,
      actionHandler: fabric.controlsUtils.rotationWithSnapping,
      offsetY: 30,
      actionName: 'rotate',
      render: renderRotationIcon,
    });

    fabric.Textbox.prototype.controls.mtr = new fabric.Control({
      x: 0,
      y: 0.5,
      cursorStyleHandler: fabric.controlsUtils.rotationStyleHandler,
      actionHandler: fabric.controlsUtils.rotationWithSnapping,
      offsetY: 30,
      actionName: 'rotate',
      render: renderRotationIcon,
    });
  }
}
