import { styled } from 'styled-components';
import ColorPicker from './widget/ColorPicker';
import { useRef, useState } from 'react';
import useClickOutside from '@/hooks/useClickOutside';

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
}: ColorProps) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
  };

  useClickOutside(ref, () => handleClose());

  return (
    <Wrap ref={ref}>
      <div
        onClick={() => setVisible(true)}
        className="color-block"
        style={{ backgroundColor: color }}
      >
        <span className="color-block-angle"></span>
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
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.highlightColor};
  border-radius: ${(props) => props.theme.radius.medium};
  display: flex;
  align-items: center;

  .color-block {
    height: ${(props) => props.theme.resets.btnInputHeight};
    cursor: pointer;
    position: relative;
  }

  .color-block-angle {
    position: absolute;
    width: 0;
    height: 0;
    border-bottom: 8px solid transparent;
    border-top: 8px solid transparent;
    border-left: 8px solid ${(props) => props.theme.colors.secondary};
    transform: rotate(45deg);
    right: 2px;
    bottom: -3px;
    display: block;
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
  }
`;
