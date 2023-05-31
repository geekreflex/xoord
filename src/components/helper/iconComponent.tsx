import {
  AlignLeftIcon,
  BgIcon,
  Close2Icon,
  CloseIcon,
  CopyIcon,
  Grid1Icon,
  Grid3Icon,
  ImageIcon,
  LockIcon,
  RedoIcon,
  ShapesIcon,
  TextIcon,
  TrashIcon,
  UndoIcon,
  UnlockIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from '@/icons';
import AlignBottomIcon from '@/icons/AlignBottomIcon';

export const iconComponents: { [key: string]: React.ComponentType } = {
  grid1Icon: Grid1Icon,
  zoomInIcon: ZoomInIcon,
  zoomOutIcon: ZoomOutIcon,
  imageIcon: ImageIcon,
  bgIcon: BgIcon,
  textIcon: TextIcon,
  grid3Icon: Grid3Icon,
  shapesIcon: ShapesIcon,
  closeIcon: CloseIcon,
  close2Icon: Close2Icon,
  lockIcon: LockIcon,
  unlockIcon: UnlockIcon,
  undoIcon: UndoIcon,
  redoIcon: RedoIcon,
  trashIcon: TrashIcon,
  copyIcon: CopyIcon,
  alignLeftIcon: AlignLeftIcon,
  alignBottomIcon: AlignBottomIcon,
};
