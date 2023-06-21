import { useRef } from 'react';
import { HexAlphaColorPicker } from 'react-colorful';
import { styled } from 'styled-components';
import Draggable from '../common/Draggable';

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
        <div className="color-picker-wrap">
          <HexAlphaColorPicker color={color} onChange={handleChange} />
        </div>
      </Wrap>
    </Draggable>
  );
}

const Wrap = styled.div`
  width: 270px;

  .color-picker-wrap {
    width: 100%;
    padding: 0 20px;

    .react-colorful {
      width: auto;
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
      height: 8px;
      border-radius: 10px;
      margin-bottom: 10px;
    }
    .react-colorful__hue-pointer {
      border-width: 3px;
      width: 15px;
      height: 15px;
    }

    .react-colorful__alpha {
      height: 8px;
      border-radius: 10px;
    }

    .react-colorful__alpha-pointer {
      border-width: 3px;
      width: 15px;
      height: 15px;
    }
  }
`;
