import { IconName } from './icon';

export interface GridItemProps {
  name: string;
  icon: IconName;
  func: () => void;
  alias: string;
}
