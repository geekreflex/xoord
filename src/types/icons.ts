export interface IIcon {
  size?: 'small' | 'medium' | 'big';
  name: IconName;
  color?: string;
  disabled?: boolean;
  hover?: boolean;
  title?: string | null;
  click?: () => void;
}

export type IconName =
  | 'grid1Icon'
  | 'zoomInIcon'
  | 'zoomOutIcon'
  | 'bgIcon'
  | 'grid3Icon'
  | 'textIcon'
  | 'shapesIcon'
  | 'imageIcon'
  | 'closeIcon'
  | 'close2Icon'
  | 'lockIcon'
  | 'unlockIcon'
  | 'undoIcon'
  | 'redoIcon'
  | 'trashIcon'
  | 'copyIcon'
  | 'alignLeftIcon'
  | 'alignBottomIcon';
