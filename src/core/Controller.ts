import { Editor } from '.';

export class Controller {
  editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
  }

  public skewX() {}
  public skewY() {}

  public delete() {
    const objects = this.editor.canvas.getActiveObjects();
    objects.map((obj) => {
      this.editor.canvas.remove(obj);
      this.editor.canvas.getActiveObject();
    });
    this.editor.canvas.discardActiveObject().renderAll();
  }
}
