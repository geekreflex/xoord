import { fabric } from 'fabric';
import { generateUniqueId } from '@/utils/unique';
import { Editor } from './Editor';
import {
  CIRCLE,
  POLYGON,
  RECTANGLE,
  SQUARE,
  TRIANGLE,
} from './lib/defaultShapes';
import { regularPolygonPoints, starPolygonPoints } from './lib/polygonPoints';

export class Tool {
  private editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
  }

  public addCircle() {
    const circle = new fabric.Circle({
      ...CIRCLE,
      id: this.id(),
      name: 'circle',
    });
    this.addObject(circle);
  }

  public addRectangle() {
    const rectangle = new fabric.Rect({
      ...RECTANGLE,
      id: this.id(),
      name: 'rect',
    });
    this.addObject(rectangle);
  }

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

  public addText() {
    const text = new fabric.Textbox('Click to edit', {
      width: 200,
      textAlign: 'left',
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

  public addImage(imageUrl: string) {
    fabric.Image.fromURL(
      imageUrl,
      (img) => {
        const image = new fabric.Image(img.getElement());
        image.set({
          left: 100,
          top: 100,
          scaleX: 0.5,
          scaleY: 0.5,
        });
        this.editor.canvas.add(image);
        this.editor.canvas.renderAll();
      },
      { crossOrigin: 'anonymous' }
    );
  }

  private addObject(obj: fabric.Object | fabric.Textbox) {
    this.editor.canvas.add(obj);
    this.editor.canvas.setActiveObject(obj);
    const center = this.editor.workspace?.getCenterPoint();
    this.editor.canvas._centerObject(obj, center!);
    this.editor.canvas.renderAll();
  }

  private id() {
    return generateUniqueId();
  }
}
