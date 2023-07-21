import { fabric } from 'fabric';

export class EditorStorage {
  private canvas: fabric.Canvas;
  constructor(canvas: fabric.Canvas) {
    this.canvas = canvas;
    this.init();
  }

  private saveEditor() {
    const json = this.canvas.toJSON(['name', 'id']);
    localStorage.setItem('editor-state', JSON.stringify(json));
  }

  public getEditor() {
    const json = localStorage.getItem('editor-state');
    if (json !== null) {
      this.canvas.loadFromJSON(
        JSON.parse(json),
        this.canvas.renderAll.bind(this.canvas)
      );
    }
  }

  init() {
    this.canvas.on('before:render', () => {
      this.saveEditor();
      console.log('saved');
    });
  }
}
