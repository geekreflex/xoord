import { styled } from 'styled-components';
import ColorPicker from './widget/ColorPicker';
import { useRef, useState } from 'react';
import { Close2Icon } from '@/icons';
import useClickOutside from '@/hooks/useClickOutside';

interface ColorProps {
  label: string;
  color: string;
  onChange: (color: string) => void;
}

export default function Color({
  label = 'No label',
  color,
  onChange,
}: ColorProps) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    console.log('close');
    setVisible(false);
  };

  useClickOutside(ref, () => handleClose());

  return (
    <Wrap ref={ref}>
      <div className="label">{label}</div>
      <div className="color-main">
        <div className="color-wrap" onClick={() => setVisible(!visible)}>
          <div
            className="color-block"
            style={{ backgroundColor: color || '#fff' }}
          ></div>
          <div className="color-value">{color}</div>
        </div>
        <div className="clear-color">
          <Close2Icon />
        </div>
      </div>
      {visible && (
        <ColorPicker
          color={color}
          onChange={onChange}
          label={label}
          close={handleClose}
        />
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  .label {
    font-size: 14px;
  }

  .color-main {
    width: 70%;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: ${(props) => props.theme.radius.medium};
    display: flex;
    align-items: center;

    .color-wrap {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 5px;
      flex: 1;
      cursor: pointer;
    }

    .color-block {
      width: 22px;
      height: 22px;
      border-radius: ${(props) => props.theme.radius.small};
      border: 1px solid ${(props) => props.theme.colors.borderColor};
    }

    .color-value {
      font-size: 12px;
      font-weight: 600;
    }

    .clear-color {
      display: flex;
      width: 30px;
      justify-content: center;
      align-items: center;
      padding: 5px;
      font-size: 12px;
      height: 30px;
      cursor: pointer;
    }
  }
`;
