import { useRef } from 'react';
import { HexAlphaColorPicker } from 'react-colorful';
import { styled } from 'styled-components';
import Draggable from '../common/Draggable';
import { Grid1Icon } from '@/icons';

interface ColorPickerProps {
  color: string;
  label: string;
  onChange: (color: string) => void;
  close: () => void;
}

export default function ColorPicker({
  color,
  label,
  onChange,
  close,
}: ColorPickerProps) {
  const ref = useRef(null);

  const handleChange = (color: string) => {
    onChange(color);
  };

  return (
    <Draggable title={label} close={close}>
      <Wrap ref={ref}>
        <div className="color-picker-top">
          <button className="iconn">
            <Grid1Icon />
          </button>
        </div>
        <div className="color-picker-wrap">
          <HexAlphaColorPicker color={color} onChange={handleChange} />
        </div>
        <div className="color-picker-bottom">
          <div className="input-wrap">
            <input value={color} />
          </div>
        </div>
      </Wrap>
    </Draggable>
  );
}

const Wrap = styled.div`
  width: 270px;

  .color-picker-wrap {
    width: 100%;
    padding: 0 15px;

    .react-colorful {
      width: auto;
      overflow: visible;
    }

    .react-colorful__saturation {
      margin-bottom: 10px;
      border-radius: 10px;
    }

    .react-colorful__saturation-pointer {
      border-width: 3px;
      width: 15px;
      height: 15px;
    }
    .react-colorful__hue {
      height: 12px;
      border-radius: 10px;
      margin-bottom: 5px;
    }
    .react-colorful__hue-pointer {
      border-width: 3px;
      width: 15px;
      height: 15px;
    }

    .react-colorful__alpha {
      height: 12px;
      border-radius: 10px;
    }

    .react-colorful__alpha-pointer {
      border-width: 3px;
      width: 15px;
      height: 15px;
    }
  }

  .color-picker-top {
    display: flex;
    padding: 0 10px;
    margin-bottom: 5px;
  }

  .color-picker-bottom {
    padding: 0 10px;
  }

  .input-wrap {
    display: flex;
    margin: 10px 0;

    input {
      border: none;
      outline: none;
      border: 1px solid ${(props) => props.theme.colors.borderColor};
      height: 32px;
      background-color: transparent;
      color: ${(props) => props.theme.colors.textColor};
      font-weight: 600;
      padding: 0 10px;
      border-radius: ${(props) => props.theme.radius.small};
    }
  }
`;
