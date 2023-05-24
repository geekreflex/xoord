import { fabric } from 'fabric';

export class Workspace {
  private id: string;
  private canvas: fabric.Canvas;
  private designs: fabric.Object[];

  constructor(id: string, canvas: fabric.Canvas) {
    this.id = id;
    this.canvas = canvas;
    this.designs = [];
  }

  addDesign(design: fabric.Object) {
    this.designs.push(design);
  }
}
