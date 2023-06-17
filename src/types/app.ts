import { IconName } from './icon';

export interface GridItemProps {
  name: string;
  icon: IconName;
  func: () => void;
  alias: string;
}

export interface Image {
  id: string;
  src: {
    small: string;
    large: string;
    medium: string;
  };
}
