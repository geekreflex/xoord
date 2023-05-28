import { Grid1Icon, ZoomInIcon, ZoomOutIcon } from '@/icons';
import { IIcon } from '@/types/icons';
import { styled } from 'styled-components';

const iconComponents: { [key: string]: React.ComponentType } = {
  grid1Icon: Grid1Icon,
  zoomInIcon: ZoomInIcon,
  zoomOutIcon: ZoomOutIcon,
};

export default function Icon({ size = 'small', name, color }: IIcon) {
  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }
  return (
    <IconWrap size={size} color={color}>
      <IconComponent />
    </IconWrap>
  );
}

const IconWrap = styled.div<{ size?: string; color?: string }>`
  display: flex;
  border: 1px solid red;
`;
