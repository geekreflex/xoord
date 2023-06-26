import { useId } from 'react';
import { styled } from 'styled-components';

interface ToggleProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export default function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <Wrap>
      <div className="switch">
        <input
          type="checkbox"
          checked={checked}
          id={useId()}
          onChange={onChange}
        />
        <span className="slider"></span>
      </div>
      {label && <h4>{label}</h4>}
    </Wrap>
  );
}

const Wrap = styled.label`
  position: relative;
  display: flex;
  gap: 20px;
  align-items: center;
  cursor: pointer;
  flex: 1;

  .switch {
    position: relative;
    width: 32px;
    height: 18px;
    border-radius: ${(props) => props.theme.radius.small};
    overflow: hidden;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  h4 {
    font-size: 14px;
  }
  .slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.secondary};
    transition: all 200ms ease-in;
    &:before {
      content: '';
      position: absolute;
      background-color: ${(props) => props.theme.colors.hoverColor};
      width: 14px;
      height: 14px;
      left: 2px;
      bottom: 2px;
      border-radius: ${(props) => props.theme.radius.small};
      transition: all cubic-bezier(0.03, 1.22, 0.31, -0.66) ease-in;
    }
  }

  input:checked + .slider {
    background-color: ${(props) => props.theme.colors.accent};
  }

  input:checked + .slider:before {
    transform: translateX(14px);
  }
`;
