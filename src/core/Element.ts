import { generateUniqueId } from '@/utils/unique';
import { Editor } from './Editor';
import { fabric } from 'fabric';
import { CIRCLE, RECTANGLE } from './lib/defaultShapes';

export class Element {
  private editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
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
    this.editor.canvas.add(circle);
    this.editor.canvas.setActiveObject(circle);
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
    this.editor.canvas.add(rectangle);
  }

  private id() {
    return generateUniqueId();
  }
}
