import { generateUniqueId } from '@/utils/unique';
import { Editor } from './Editor';
import { fabric } from 'fabric';

export class Tools {
  private editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
  }

  public addCirlce() {
    const cirlce = new fabric.Circle({
      radius: 50,
      fill: 'red',
      id: this.id(),
      name: 'circle',
    });
    this.editor.canvas.add(cirlce);
  }

  public addRectangle() {
    const rectangle = new fabric.Rect({
      fill: 'red',
      width: 100,
      height: 100,
      id: this.id(),
    });
    this.editor.canvas.add(rectangle);
  }

  private id() {
    return generateUniqueId();
  }
}
