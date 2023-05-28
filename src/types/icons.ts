export interface IIcon {
  size?: 'small' | 'medium' | 'big';
  name: IconName;
  color?: string;
}

type IconName = 'grid1Icon' | 'zoomInIcon' | 'zoomOutIcon';
