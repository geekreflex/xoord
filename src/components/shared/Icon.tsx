import { IIcon } from '@/types/icon';
import { styled } from 'styled-components';
import { IconComponents } from '../icon/IconComponent';

export default function Icon({
  size = 'medium',
  name,
  color,
  disabled,
  hover = true,
  label = null,
  click,
}: IIcon) {
  const IconComponent = IconComponents[name];
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
      label={label}
      onClick={click}
    >
      <span id="icon">
        <IconComponent />
      </span>
      {label && <span id="label">{label}</span>}
    </IconWrap>
  );
}

const IconWrap = styled.button<{
  size?: string;
  color?: string;
  disabled?: boolean;
  hover?: string;
  label: string | null;
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
  width: ${(props) => (props.label ? '100%' : 'auto')};
  height: ${(props) => (props.label ? '70px' : '')};
  gap: 7px;
  cursor: pointer;
  padding: ${(props) => (props.hover == 'true' ? '5px' : '')};
  &:hover {
    background-color: ${(props) =>
      props.hover == 'true' ? props.theme.colors.hoverColor : ''};
  }

  span#icon {
    display: flex;
  }

  span#label {
    font-size: 11px;
    font-weight: 600;
  }
`;
