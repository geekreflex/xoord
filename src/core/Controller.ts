import { Editor } from '.';
import { History } from './History';

export class Controller extends History {
  editor: Editor;
  private history: string[] = [];
  private historyIndex: number = 0;

  constructor(editor: Editor) {
    super(editor.canvas);
    this.editor = editor;
    // this.saveState();

    // this.editor.canvas.on('object:modified', () => this.saveState());
    // this.editor.canvas.on('object:added', () => this.saveState());
  }

  // private saveState() {
  //   // implement save here
  //   const json = JSON.stringify(this.editor.canvas);
  //   this.history.push(json);
  // }

  // public undo() {
  //   if (this.historyIndex < this.history.length) {
  //     this.editor.canvas.clear().renderAll();
  //     this.editor.canvas.loadFromJSON(this.history[this.historyIndex], () => {
  //       this.editor.canvas.renderAll();
  //     });
  //     this.historyIndex += 1;
  //   }
  // }

  // public redo() {
  //   if (this.historyIndex < this.history.length - 1) {
  //     this.historyIndex++;
  //     const json = this.history[this.historyIndex];
  //     this.editor.canvas.loadFromJSON(json, () => {
  //       this.editor.canvas.renderAll();
  //     });
  //   }
  // }
}
