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
