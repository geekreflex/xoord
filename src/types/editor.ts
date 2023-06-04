export enum ObjectTypes {
  Circle = 'circle',
  Triangle = 'triangle',
  Rectangle = 'rect',
  Polygon = 'polygon',
  Selection = 'selection',
  Unknown = 'unknown',
}

export interface TemplateSizeProps {
  name: string;
  width: number;
  height: number;
  unit: string;
  categrory: string;
}
