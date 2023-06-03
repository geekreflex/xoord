import { styled } from 'styled-components';
import Modal from '../common/Modal';
import CustomInput from '../common/input/CustomInput';
import { useState } from 'react';

export default function ChooseCanvasSize() {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  return (
    <Modal title="Choose Template Size">
      <CCSizeWrap>
        <div className="canvas-size-wrap">
          <div className="canvas-size">
            <CustomInput min={32} max={10000} label="" />
            <CustomInput min={32} max={10000} />
          </div>
        </div>
      </CCSizeWrap>
    </Modal>
  );
}

const CCSizeWrap = styled.div`
  .canvas-size-wrap {
    padding: 20px;
    background-color: ${(props) => props.theme.colors.secondaryColor};
    .canvas-size {
      display: flex;
      gap: 20px;
    }
  }
`;
