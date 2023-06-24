import { styled } from 'styled-components';
import ColorPicker from './widget/ColorPicker';
import { useRef, useState } from 'react';
import { Close2Icon } from '@/icons';
import useClickOutside from '@/hooks/useClickOutside';
import Tooltip from './common/Tooltip';

interface ColorProps {
  label: string;
  color: string;
  onChange: (color: string) => void;
  clear: () => void;
  add: () => void;
}

export default function Color({
  label = 'No label',
  color,
  onChange,
  clear,
  add,
}: ColorProps) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
  };

  const handleClear = () => {
    clear();
    handleClose();
  };

  useClickOutside(ref, () => handleClose());

  return (
    <Wrap ref={ref}>
      {color ? (
        <>
          <div className="color-wrap" onClick={() => setVisible(!visible)}>
            <div
              className="color-block"
              style={{ backgroundColor: color || '#fff' }}
            ></div>
            <div className="color-value">{color}</div>
          </div>
          <div className="clear-color" onClick={handleClear}>
            <Close2Icon />
          </div>
        </>
      ) : (
        <div className="add-color" onClick={add}>
          Add...
        </div>
      )}

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
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.highlightColor};
  border-radius: ${(props) => props.theme.radius.medium};
  display: flex;
  align-items: center;
  height: 35px;

  .color-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px;
    flex: 1;
    cursor: pointer;

    .color-block {
      width: 24px;
      height: 24px;
      border-radius: ${(props) => props.theme.radius.small};
      border: 1px solid ${(props) => props.theme.colors.borderColor};
    }

    .color-value {
      font-size: 12px;
      font-weight: 600;
    }
  }

  .add-color {
    opacity: 0.5;
    font-size: 12px;
    font-weight: 600;
    height: 100%;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 10px;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }

  .clear-color {
    display: flex;
    width: 40px;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    height: 100%;
    cursor: pointer;
  }
`;
