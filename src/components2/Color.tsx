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
        <div
          className="color-block"
          style={{ backgroundColor: color || '#121212' }}
        >
          <div className="color-block-triangle"></div>
        </div>
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
    border: 1px solid ${(props) => props.theme.colors.borderColor};

    .color-block-triangle {
      position: absolute;
      width: 0;
      height: 0;
      border-bottom: 8px solid transparent;
      border-top: 8px solid transparent;
      border-left: 8px solid ${(props) => props.theme.colors.primary};
      transform: rotate(45deg);
      display: block;
      right: 5px;
      bottom: 0px;
      filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
    }
  }

  .color-picker-wrap {
    width: 100%;
    display: flex;
    padding: 10px;
  }
`;
