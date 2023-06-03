import { styled } from 'styled-components';
import Modal from '../common/Modal';
import CustomInput from '../common/CustomInput';
import { useState } from 'react';

export default function ChooseCanvasSize() {
  const [width, setWidth] = useState('100');
  const [height, setHeight] = useState('200');

  const handleWidth = (val: string) => {
    setWidth(val);
  };

  const handleHeight = (val: string) => {
    setHeight(val);
  };

  return (
    <Modal title="Choose Template Size">
      <CCSizeWrap>
        <div className="canvas-size-wrap">
          <div className="canvas-size">
            <CustomInput
              min={32}
              max={10000}
              label="Width"
              value={width}
              onChange={handleWidth}
            />
            <CustomInput
              min={32}
              max={10000}
              label="Height"
              value={height}
              onChange={handleHeight}
            />
          </div>
        </div>
      </CCSizeWrap>
    </Modal>
  );
}

const CCSizeWrap = styled.div`
  width: 450px;
  .canvas-size-wrap {
    padding: 20px;
    background-color: ${(props) => props.theme.colors.secondaryColor};
    border-radius: ${(props) => props.theme.radius.medium};
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    .canvas-size {
      display: flex;
      gap: 20px;
    }
  }
`;
