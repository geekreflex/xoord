import { styled } from 'styled-components';
import ColorPicker from 'react-best-gradient-color-picker';
import Popover from './shared/Popover';

interface ColorProps {
  color: string;
  onChange: (color: string) => void;
}

export default function Color({ color, onChange }: ColorProps) {
  return (
    <Wrap>
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
          <div className="color-block" style={{ backgroundColor: color }}></div>
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
