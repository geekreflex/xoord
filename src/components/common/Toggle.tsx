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
    width: 30px;
    height: 16px;
    border-radius: ${(props) => props.theme.radius.small};
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  h4 {
    font-size: 14px;
    font-weight: 400;
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
      left: 1px;
      bottom: 1px;
      border-radius: ${(props) => props.theme.radius.small};
      transition: all cubic-bezier(0.03, 1.22, 0.31, -0.66) ease-in;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
        rgba(0, 0, 0, 0.24) 0px 1px 2px;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
  }

  input:checked + .slider {
    background-color: ${(props) => props.theme.colors.accent};
  }

  input:checked + .slider:before {
    transform: translateX(14px);
  }
`;
