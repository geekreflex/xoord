import { Editor } from '.';

export class Controller {
  editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
    this.initExtendHistory();
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

  private initExtendHistory() {
    fabric.Canvas.prototype.canUndo = function () {
      return this.historyUndo.length > 0;
    };
    fabric.Canvas.prototype.canRedo = function () {
      return this.historyRedo.length > 0;
    };
  }
}
