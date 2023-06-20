import { RgbaColorPicker } from 'react-colorful';
import { styled } from 'styled-components';

export default function ColorPicker() {
  return (
    <Wrap>
      <div className="color-picker-wrap">
        <RgbaColorPicker />
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  top: 100px;
  z-index: 9999;
  position: fixed;
  right: 300px;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 20px;
  border-radius: ${(props) => props.theme.radius.medium};

  .color-picker-wrap {
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
