import { fabric } from 'fabric';
import { Editor } from '.';

export class Controller {
  private editor: Editor;
  private history: fabric.Object[] = [];
  private historyIndex: number = -1;

  constructor(editor: Editor) {
    this.editor = editor;
    this.saveState;

    this.editor.canvas.on('object:modified', () => this.saveState());
    this.editor.canvas.on('object:added', () => this.saveState());
  }

  private saveState() {
    // implement save here
    console.log('save to history', this.editor.canvas);
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

  public redo() {
    if (this.historyIndex < this.history.length - 1) {
      this.historyIndex++;
      const json = this.history[this.historyIndex];
      this.editor.canvas.loadFromJSON(json, () => {
        this.editor.canvas.renderAll();
      });
    }
  }
}
