import { Editor } from '.';

export class Controller {
  editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
    this.initExtendHistory();
  }

  public skewX() {}
  public skewY() {}

  private initExtendHistory() {
    fabric.Canvas.prototype.canUndo = function () {
      return this.historyUndo.length > 0;
    };
    fabric.Canvas.prototype.canRedo = function () {
      return this.historyRedo.length > 0;
    };
  }
}
