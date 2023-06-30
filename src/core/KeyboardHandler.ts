import { Controller } from './Controller';
import { Editor } from './Editor';
import { setCurrentZoom } from '@/features/editorSlice';
import { Dispatch } from '@reduxjs/toolkit';

export class KeyboardHandler {
  private editor: Editor;
  private canvas: fabric.Canvas;
  private dispatch: Dispatch;
  private controller: Controller;

  constructor(editor: Editor, dispatch: Dispatch) {
    this.editor = editor;
    this.canvas = editor.canvas;
    this.dispatch = dispatch;
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
      case '0':
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
    this.editor.zoomIn();
    this.handleUpdateZoom();
  }

  private zoomOut() {
    this.editor.zoomOut();
    this.handleUpdateZoom();
  }

  private deleteSelectedObject() {
    this.controller.delete();
  }

  private zoom100() {
    this.editor.setZoomAuto(1);
  }

  private handleUpdateZoom() {
    const zoom = this.canvas.getZoom();
    this.dispatch(setCurrentZoom(zoom * 100));
  }
}
