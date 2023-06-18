import { styled } from 'styled-components';
import ColorPicker from 'react-best-gradient-color-picker';
import { useRef, useState } from 'react';
import { useAppSelector } from '@/app/hooks';
import useClickOutside from '@/hooks/useClickOutside';
import Popover from './shared/Popover';

interface ColorProps {
  color: string;
  onChange: (color: string) => void;
}

export default function Color({ color, onChange }: ColorProps) {
  const [visible, setVisible] = useState(false);
  const { object } = useAppSelector((state) => state.editor);
  const ref = useRef(null);

  useClickOutside(ref, () => setVisible(false));

  return (
    <Wrap ref={ref}>
      <div>
        <Popover
          placement="top"
          content={
            <div className="color-picker-wrap">
              <ColorPicker
                width={230}
                value={color}
                onChange={onChange}
                hideColorGuide={true}
                hideAdvancedSliders={true}
                hidePresets={true}
                hideInputType={false}
                hideInputs={true}
              />
            </div>
          }
        >
          <div
            onClick={() => setVisible(!visible)}
            className="color-block"
            style={{ backgroundColor: object?.fill as string }}
          ></div>
        </Popover>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;

  .color-block {
    width: 35px;
    height: 35px;
    cursor: pointer;
    border-radius: ${(props) => props.theme.radius.medium};
  }

  .color-picker-wrap {
    width: 100%;
    display: flex;
    padding: 10px;
  }
`;
