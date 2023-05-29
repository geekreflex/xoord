import { fabric } from 'fabric';
import { Editor } from '.';

export class Controller {
  private editor: Editor;
  private history: fabric.Object[] = [];
  private historyIndex: number = -1;

  constructor(editor: Editor) {
    this.editor = editor;
    this.saveState;
  }

  private saveState() {
    const state = JSON.stringify(this.editor.canvas);
    const clonedState = JSON.parse(state);
    this.history.push(clonedState);
    this.historyIndex++;
  }

  public undo() {
    if (this.historyIndex > 0) {
      this.historyIndex--;
      const json = JSON.stringify(this.history[this.historyIndex]);
      this.editor.canvas.loadFromJSON(json, () => {
        this.editor.canvas.renderAll();
      });
    }
  }
}
