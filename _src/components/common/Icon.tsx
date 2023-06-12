import { IIcon } from '@/types/icons';
import { styled } from 'styled-components';
import { iconComponents } from '../helper/iconComponent';

export default function Icon({
  size = 'medium',
  name,
  color,
  disabled,
  hover = true,
  title = null,
  click,
}: IIcon) {
  const IconComponent = iconComponents[name];
  const renderSize = () => {
    switch (size) {
      case 'small':
        return '17px';
      case 'medium':
        return '20px';
      case 'big':
        return '24px';
      default:
        return '20px';
    }
  };

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }
  return (
    <IconWrap
      size={renderSize()}
      color={color}
      disabled={disabled}
      hover={hover.toString()}
      t={title}
      onClick={click}
    >
      <span id="icon">
        <IconComponent />
      </span>
      {title && <span id="title">{title}</span>}
    </IconWrap>
  );
}

const IconWrap = styled.button<{
  size?: string;
  color?: string;
  disabled?: boolean;
  hover?: string;
  t: string | null;
}>`
  display: flex;
  font-size: ${(props) => props.size};
  color: ${(props) => props.color || props.theme.colors.textColor};
  opacity: ${(props) => (props.disabled ? 0.2 : 1)};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  background-color: transparent;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${(props) => (props.t ? '100%' : 'auto')};
  height: ${(props) => (props.t ? '70px' : '')};
  gap: 7px;
  cursor: pointer;
  padding: ${(props) => (props.hover == 'true' ? '5px' : '')};
  border-radius: 5px;
  &:hover {
    background-color: ${(props) =>
      props.hover == 'true' ? props.theme.colors.hoverColor1 : ''};
  }

  span#icon {
    display: flex;
  }

  span#title {
    font-size: 11px;
    font-weight: 600;
  }

  svg,
  path {
    /* stroke-width: 2px; */
  }
`;
