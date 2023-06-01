import { Editor } from '.';

export class Controller {
  editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
  }

  public skewX() {}
  public skewY() {}

  public align(position: string) {
    const activeObj = this.editor.canvas.getActiveObject();

    switch (position) {
      case 'left':
        activeObj?.set({
          left: 0,
        });
        break;
      case 'right':
        activeObj?.set({
          left:
            this.editor.canvas.width! - activeObj.width! * activeObj.scaleX!,
        });
        break;
    }
    this.editor.canvas.renderAll();
  }

  public delete() {
    const objects = this.editor.canvas.getActiveObjects();
    objects.map((obj) => {
      this.editor.canvas.remove(obj);
      this.editor.canvas.getActiveObject();
    });
    this.editor.canvas.discardActiveObject().renderAll();
  }
}
