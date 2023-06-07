import type { Editor } from '.';

export class Text {
  private editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
  }

  public addText() {
    const text = new fabric.Textbox('Click to edit', {
      width: 200,
      textAlign: 'left',
    });
    this.editor.canvas.add(text);
    this.editor.canvas.setActiveObject(text);
    this.editor.canvas.renderAll();

    // textbox.setControlsVisibility({
    //   mt: false,
    //   mb: false,
    // });
  }

  public updateTextSize = () => {};
}
