import { fabric } from 'fabric';
import { CIRCLE, POLYGON, RECTANGLE, TRIANGLE } from './lib/shapes';
import { EditorSetup } from './EditorSetup';
import { regularPolygonPoints, starPolygonPoints } from './lib/polygonPoints';

export class Tool {
  private editor: EditorSetup;
  private canvas: fabric.Canvas;
  private pos: { x: number; y: number } | null;

  constructor(editor: EditorSetup) {
    this.editor = editor;
    this.canvas = editor.canvas;
    this.pos = null;
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
        this.canvas.add(
          clone.set({
            name: activeObject.name,
            left: activeObject.left! + 10,
            top: activeObject.top! + 10,
          })
        );
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

  public underline() {
    const activeObject = this.canvas.getActiveObject();
    if (activeObject instanceof fabric.Textbox) {
      const isUnderlined = activeObject.underline;
      activeObject.set('underline', !isUnderlined);
    }
    this.canvas.renderAll();
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
