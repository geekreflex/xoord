import { fabric } from 'fabric';
import { CIRCLE, RECTANGLE } from './lib/shapes';
import { EditorSetup } from './EditorSetup';

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
