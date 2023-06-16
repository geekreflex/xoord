import { Editor } from './Editor';

export class Controller {
  editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
  }

  public flipX() {
    const activeObject = this.editor.canvas.getActiveObject();
    if (activeObject && activeObject.flipX) {
      activeObject.toggle('flipX');
    }
    this.editor.canvas.renderAll();
  }

  public flipY() {
    const activeObject = this.editor.canvas.getActiveObject();
    console.log('clicked');
    if (activeObject) {
      activeObject.toggle('flipY');
    }
    this.editor.canvas.renderAll();
  }

  public rotateLeft(angle: number) {
    const activeObject = this.editor.canvas.getActiveObject();

    if (activeObject) {
      activeObject.set('angle', activeObject.angle! - angle).setCoords();
    }
    this.editor.canvas.renderAll();
  }

  public rotateRight(angle: number) {
    const activeObject = this.editor.canvas.getActiveObject();

    if (activeObject) {
      activeObject.set('originX', 'center');
      activeObject.set('originY', 'center');
      activeObject.set('angle', activeObject.angle! + angle).setCoords();
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
    this.editor.canvas.renderAll();
  }

  public duplicate() {
    const activeObject = this.editor.canvas.getActiveObject();
    if (activeObject) {
      activeObject.clone((clone: fabric.Object) => {
        this.editor.canvas.add(
          clone.set({
            left: activeObject.left! + 10,
            top: activeObject.top! + 10,
          })
        );
      });
    }
  }

  public lock() {
    const activeObject = this.editor.canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockMovementX = true;
      activeObject.lockMovementY = true;
      activeObject.lockRotation = true;
      activeObject.selectable = false;
    }
    this.editor.canvas.renderAll();
  }

  public align(position: string) {
    const activeObject = this.editor.canvas.getActiveObject();

    if (activeObject && activeObject.type === 'activeSelection') {
      const activeSelection = activeObject as fabric.ActiveSelection;

      switch (position) {
        case 'left':
          const activeSelectionLeft = -(activeSelection.width! / 2);
          activeSelection.forEachObject((item) => {
            item.set({
              left: activeSelectionLeft,
            });
            item.setCoords();
          });

          break;
        case 'right':
          const activeSelectionRight = activeSelection.width! / 2;
          activeSelection.forEachObject((item) => {
            item.set({
              left:
                activeSelectionRight -
                (item.width! + item.strokeWidth!) * item.scaleX!,
            });
            item.setCoords();
          });
          break;
        case 'top':
          const activeSelectionTop = -activeSelection.height! / 2;
          activeSelection.forEachObject((item) => {
            item.set({
              top: activeSelectionTop,
            });
            item.setCoords();
          });
          break;
        case 'bottom':
          const activeSelectionBottom = activeSelection.height! / 2;
          activeSelection.forEachObject((item) => {
            item.set({
              top:
                activeSelectionBottom -
                (item.height! + item.strokeWidth!) * item.scaleY!,
            });
            item.setCoords();
          });
          break;
        case 'horizontal':
          activeSelection.forEachObject((item) => {
            item.set({
              left: 0 - (item.width! * item.scaleX!) / 2,
            });
            item.setCoords();
          });
          break;
        case 'vertical':
          activeSelection.forEachObject((item) => {
            item.set({
              top: 0 - (item.width! * item.scaleY!) / 2,
            });
            item.setCoords();
          });
          break;
      }
    } else if (activeObject) {
      const workspaceWidth = this.editor.workspace?.width!;
      const workspaceHeight = this.editor.workspace?.height!;
      const activeObjectStrokeWidth = activeObject.strokeWidth!;

      switch (position) {
        case 'left':
          activeObject?.set({
            left: 0,
          });
          break;
        case 'right':
          activeObject.set({
            left:
              workspaceWidth -
              activeObject.width! * activeObject.scaleX! -
              activeObjectStrokeWidth,
          });
          break;
        case 'top':
          activeObject.set({
            top: 0,
          });
          activeObject.setCoords();
          break;
        case 'bottom':
          activeObject.set({
            top:
              workspaceHeight -
              activeObject.height! * activeObject.scaleY! -
              activeObjectStrokeWidth,
          });
          activeObject.setCoords();
          break;
        case 'horizontal':
          activeObject.set({
            left:
              (workspaceWidth -
                activeObject.height! * activeObject.scaleY! -
                activeObjectStrokeWidth) /
              2,
          });
          break;
        case 'vertical':
          activeObject.set({
            top:
              (workspaceHeight -
                activeObject.height! * activeObject.scaleY! -
                activeObjectStrokeWidth) /
              2,
          });
      }
    }
    this.editor.canvas.renderAll();
  }
}
