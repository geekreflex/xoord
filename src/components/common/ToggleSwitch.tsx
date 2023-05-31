import { styled } from 'styled-components';

interface ToggleProps {
  checked: boolean;
  onChange: () => void;
  id: string;
}

export default function ToggleSwitch({ checked, onChange, id }: ToggleProps) {
  return (
    <ToggleWrap>
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={onChange} id={id} />
        <span className="slider" />
      </label>
    </ToggleWrap>
  );
}

const ToggleWrap = styled.div`
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
