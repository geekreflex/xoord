import { fabric } from 'fabric';
import { CIRCLE, POLYGON, RECTANGLE, TRIANGLE } from './lib/shapes';
import { EditorSetup } from './EditorSetup';
import { regularPolygonPoints, starPolygonPoints } from './lib/polygonPoints';
import FontFaceObserver from 'fontfaceobserver';

export class Tool {
  private editor: EditorSetup;
  private canvas: fabric.Canvas;
  private pos: { x: number; y: number } | null;
  public clipboard: fabric.Object | null;

  constructor(editor: EditorSetup) {
    this.editor = editor;
    this.canvas = editor.canvas;
    this.pos = null;
    this.clipboard = null;
  }

  public addCircle() {
    const circle = new fabric.Circle({
      ...CIRCLE,
      name: 'circle',
    });

    this.addObject(circle);
  }

  public addRectangle() {
    const rect = new fabric.Rect({
      ...RECTANGLE,
      name: 'rect',
    });

    this.addObject(rect);
  }

  public addTriangle() {
    const triangle = new fabric.Triangle({
      ...TRIANGLE,
      name: 'triangle',
    });

    this.addObject(triangle);
  }

  public addLine() {
    const line = new fabric.Line([50, 50, 400, 400], {
      stroke: 'black',
      strokeWidth: 2,
      strokeUniform: true,
      name: 'line',
    });

    this.addObject(line);
  }

  public addPolygon() {
    const polygonPoints = regularPolygonPoints(5, 200);
    const polygon = new fabric.Polygon(polygonPoints, {
      ...POLYGON,
      name: 'regpoly',
      objectCaching: false,
    });

    this.addObject(polygon);
  }

  public addStar() {
    const starPoints = starPolygonPoints(5, 80, 200);
    const star = new fabric.Polygon(starPoints, {
      ...POLYGON,
      name: 'star',
      objectCaching: false,
    });

    this.addObject(star);
  }

  public addText() {
    const text = new fabric.Textbox('Click to edit', {
      width: 600,
      textAlign: 'center',
      fontFamily: 'Lugrasimo',
      fontSize: 72,
      fill: '#f1f1f1',
      name: 'text',
    });

    text.setControlsVisibility({
      mt: false,
      mb: false,
      ml: false,
      tr: false,
      bl: false,
      br: false,
    });

    this.addObject(text);
  }

  public delete() {
    const objects = this.canvas.getActiveObjects();
    objects.map((obj) => {
      this.canvas.remove(obj);
      this.canvas.getActiveObject();
    });
    this.canvas.discardActiveObject().renderAll();
    this.canvas.renderAll();
  }

  public duplicate() {
    const activeObject = this.canvas.getActiveObject();

    if (activeObject) {
      activeObject.clone((clone: fabric.Object) => {
        this.canvas.discardActiveObject();
        clone.set({
          name: activeObject.name,
          left: activeObject.left! + 10,
          top: activeObject.top! + 10,
        });
        if (clone.type === 'activeSelection') {
          // active selection needs a reference to the canvas.
          const activeSelection = clone as fabric.ActiveSelection;
          activeSelection.canvas = this.canvas;
          activeSelection.forEachObject((obj) => {
            this.canvas.add(obj);
          });
          activeSelection.setCoords();
        } else {
          this.canvas.add(clone);
        }

        this.canvas.setActiveObject(clone);
        this.canvas.requestRenderAll();
      });
    }
  }

  public copy() {
    this.canvas.getActiveObject()?.clone((cloned: fabric.Object) => {
      this.clipboard = cloned;
    });
  }

  public paste(x: number, y: number) {
    if (this.clipboard) {
      // const canvasPosition = this.canvas.getElement().getBoundingClientRect();
      // const canvasCenterX = canvasPosition.width / 2;
      // const canvasCenterY = canvasPosition.height / 2;
      // Get the dimensions of the copied object
      // const copiedObjectWidth = this.clipboard.getScaledWidth();
      // const copiedObjectHeight = this.clipboard.getScaledHeight();

      const newX = x;
      const newY = y;

      this.clipboard.clone((clone: fabric.Object) => {
        this.canvas.discardActiveObject();
        clone.set({
          name: this.clipboard?.name || 'unnamed',
          left: newX,
          top: newY,
        });

        if (clone.type === 'activeSelection') {
          // active selection needs a reference to the canvas.
          const activeSelection = clone as fabric.ActiveSelection;
          activeSelection.canvas = this.canvas;
          activeSelection.forEachObject((obj) => {
            this.canvas.add(obj);
          });
          activeSelection.setCoords();
        } else {
          this.canvas.add(clone);
        }

        this.canvas.setActiveObject(clone);
        this.canvas.requestRenderAll();
      });
    }
  }

  public order(action: string) {
    const object = this.canvas.getActiveObject();

    switch (action) {
      case 'front':
        object?.bringToFront();
        break;
      case 'back':
        object?.sendToBack();
        break;
      case 'forward':
        object?.bringForward();
        break;
      case 'backward':
        object?.sendBackwards();
        break;
      default:
        break;
    }

    this.editor.canvas.renderAll();
  }

  public flipX() {
    const activeObject = this.editor.canvas.getActiveObject();
    if (activeObject) {
      activeObject.toggle('flipX');
    }
    this.editor.canvas.renderAll();
  }

  public flipY() {
    const activeObject = this.editor.canvas.getActiveObject();
    if (activeObject) {
      activeObject.toggle('flipY');
    }
    this.editor.canvas.renderAll();
  }

  public fontWeight() {
    const activeObject = this.canvas.getActiveObject();
    if (activeObject instanceof fabric.Textbox) {
      const isBold = activeObject.fontWeight === 'bold';
      activeObject.set('fontWeight', isBold ? 'normal' : 'bold');
    }
    this.canvas.renderAll();
  }

  public fontStyle() {
    const activeObject = this.canvas.getActiveObject();
    if (activeObject instanceof fabric.Textbox) {
      const isItalic = activeObject.fontStyle === 'italic';
      activeObject.set('fontStyle', isItalic ? 'normal' : 'italic');
    }
    this.canvas.renderAll();
  }

  public fontSize(size: number) {
    const activeObject = this.editor.canvas.getActiveObject();

    if (activeObject instanceof fabric.Textbox) {
      activeObject.set({ fontSize: size });
    }
    this.editor.canvas.renderAll();
  }

  public underline() {
    const activeObject = this.canvas.getActiveObject();
    if (activeObject instanceof fabric.Textbox) {
      const isUnderlined = activeObject.underline;
      activeObject.set('underline', !isUnderlined);
    }
    this.canvas.renderAll();
  }

  public textAlign(alignment: string) {
    const activeObject = this.canvas.getActiveObject();
    if (activeObject instanceof fabric.Textbox) {
      activeObject.set({ textAlign: alignment });
    }
    this.canvas.renderAll();
  }

  public fontFamily(name: string) {
    const activeObject = this.editor.canvas.getActiveObject();
    const font = new FontFaceObserver(name);
    const ed = this.editor.canvas;

    if (activeObject instanceof fabric.Textbox) {
      // Update code to check if font is system font
      // else load custom fonts with FonFaceObserver
      if (name === 'ubuntu') {
        activeObject.set({ fontFamily: name });
      } else {
        font
          .load()
          .then(function () {
            activeObject.set({ fontFamily: name });
            ed.renderAll();
          })
          .catch((err: any) => {
            console.error('Font failed', err);
          });
      }
    }
    this.editor.canvas.renderAll();
  }

  private addObject(obj: fabric.Object | fabric.Textbox) {
    if (this.pos) {
      obj.set({
        left: this.pos.x,
        top: this.pos.y,
      });
    } else {
      obj.scaleToWidth(this.editor.workspaceEl.offsetWidth / 8);
      this.canvas.centerObject(obj);
    }

    this.canvas.add(obj);
    this.canvas.setActiveObject(obj);
    this.canvas.renderAll();
  }
}
