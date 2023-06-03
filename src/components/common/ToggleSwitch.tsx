import { useId } from 'react';
import { styled } from 'styled-components';

interface ToggleProps {
  checked: boolean;
  onChange: () => void;
  label?: string;
}

export default function ToggleSwitch({
  checked,
  onChange,
  label,
}: ToggleProps) {
  return (
    <ToggleWrap>
      <label>
        <div className="switch">
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            id={useId()}
          />
          <span className="slider" />
        </div>
        {label && <span className="toggle-label">{label}</span>}
      </label>
    </ToggleWrap>
  );
}

const ToggleWrap = styled.div`
  label {
    display: flex;
    align-items: center;

    .toggle-label {
      margin-left: 20px;
      font-size: 14px;
    }
  }
  .switch {
    position: relative;
    display: flex;
    width: 28px;
    height: 15px;
    border-radius: 20px;
    overflow: hidden;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      transition: 400ms;
      &:before {
        position: absolute;
        content: '';
        height: 11px;
        width: 12px;
        left: 3px;
        bottom: 2px;
        background-color: white;
        transition: 400ms;
        border-radius: 20px;
      }
    }
  }

  input:checked + .slider {
    background-color: #111;
  }
  input:checked + .slider:before {
    transform: translateX(10px);
  }
`;
