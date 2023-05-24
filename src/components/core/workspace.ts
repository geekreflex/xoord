import { fabric } from 'fabric';

export class Workspace {
  private id: string;
  private canvas: fabric.Canvas | null;
  private designs: fabric.Object[];

  constructor(id: string, canvas: fabric.Canvas) {
    this.id = id;
    this.canvas = canvas;
    this.designs = [];
  }

  setCanvas(canvas: fabric.Canvas | null) {
    this.canvas = canvas;
  }

  addDesign(design: fabric.Object) {
    this.designs.push(design);
  }

  getId() {
    return this.id;
  }

  getCanvas() {
    return this.canvas;
  }
}
