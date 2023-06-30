import { Controller } from './Controller';
import { Editor } from './Editor';

export class KeyboardHandler {
  private editor: Editor;
  private canvas: fabric.Canvas;
  private controller: Controller;

  constructor(editor: Editor) {
    this.editor = editor;
    this.canvas = editor.canvas;
    this.controller = new Controller(editor);
    this.attachEventListeners();
  }

  private attachEventListeners() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    event.preventDefault();
    switch (event.key) {
      case '=':
        this.zoomIn();
        break;
      case '-':
        this.zoomOut();
        break;
      case ')':
        this.zoom100();
        break;
      case 'Delete':
      case 'Backspace':
        this.deleteSelectedObject();
        break;
      default:
        return '';
    }
  };

  private zoomIn() {
    const zoom = this.canvas.getZoom() * 1.1;
    this.editor.setZoomAuto(zoom);
  }

  private zoomOut() {
    const zoom = this.canvas.getZoom() * 0.9;
    this.editor.setZoomAuto(zoom);
  }

  private deleteSelectedObject() {
    this.controller.delete();
  }

  private zoom100() {
    this.editor.setZoomAuto(1);
  }
}
