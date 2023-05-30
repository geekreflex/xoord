import { generateUniqueId } from '@/utils/unique';
import { Editor } from './Editor';
import { fabric } from 'fabric';
import {
  CIRCLE,
  POLYGON,
  RECTANGLE,
  SQUARE,
  TRIANGLE,
} from './lib/defaultShapes';
import { regularPolygonPoints, starPolygonPoints } from './lib/polygonPoints';

export class Element {
  private editor: Editor;
  public selectedObj: fabric.Object | undefined;

  constructor(editor: Editor) {
    this.editor = editor;
    this.selectedObj = undefined;
  }

  /**
   * Add Circle
   */
  public addCirlce() {
    const circle = new fabric.Circle({
      ...CIRCLE,
      id: this.id(),
      name: 'circle',
    });
    this.addObject(circle);
  }

  /**
   * Add Rectangle
   */
  public addRectangle() {
    const rectangle = new fabric.Rect({
      ...RECTANGLE,
      id: this.id(),
      name: 'rect',
    });
    this.addObject(rectangle);
  }

  /**
   *
   * @returns
   */
  public addSquare() {
    const square = new fabric.Rect({
      ...SQUARE,
      id: this.id(),
      name: 'rect',
    });
    this.addObject(square);
  }

  public addTriangle() {
    const triangle = new fabric.Triangle({
      ...TRIANGLE,
      id: this.id(),
      name: 'triangle',
    });
    this.addObject(triangle);
  }

  public addPolygon() {
    const polygonPoints = regularPolygonPoints(5, 100);
    const polygon = new fabric.Polygon(polygonPoints, {
      ...POLYGON,
      id: this.id(),
      name: 'regpoly',
      objectCaching: false,
    });
    this.addObject(polygon);
  }

  public addStar() {
    const starPoints = starPolygonPoints(5, 50, 100);
    const star = new fabric.Polygon(starPoints, {
      ...POLYGON,
      id: this.id(),
      name: 'star',
      objectCaching: false,
    });
    this.addObject(star);
  }

  private addObject(obj: fabric.Object) {
    this.editor.canvas.add(obj);
    this.editor.canvas.setActiveObject(obj);
    this.editor.canvas.renderAll();
  }

  private id() {
    return generateUniqueId();
  }
}
