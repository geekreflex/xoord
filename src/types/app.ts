import { IconName } from './icons';

export type ToolType =
  | 'text'
  | 'elements'
  | 'templates'
  | 'backgrounds'
  | 'images';

export interface IPos {
  name: string;
  icon: IconName;
  func: () => void;
  alias: string;
}
