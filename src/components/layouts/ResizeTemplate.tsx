import { styled } from 'styled-components';
import Modal from '../common/Modal';
import CustomInput from '../common/CustomInput';
import { useState } from 'react';
import { useAppDispatch } from '@/app/hooks';
import { toggleReszieTempleteModal } from '@/features/appSlice';
import ToggleSwitch from '../common/ToggleSwitch';
import { BtnPrimary, BtnSecondary } from '@/styles/global';

export default function ResizeTemplate() {
  const dispatch = useAppDispatch();
  const [aspect, setAspect] = useState(false);
  const [width, setWidth] = useState('100');
  const [height, setHeight] = useState('200');

  const handleWidth = (val: string) => {
    setWidth(val);
    if (aspect) {
      handleHeight(val);
    }
  };

  const handleHeight = (val: string) => {
    setHeight(val);
    if (aspect) {
      handleWidth(val);
    }
  };

  const closeModal = () => {
    dispatch(toggleReszieTempleteModal(false));
  };

  return (
    <Modal title="Resize Template" close={closeModal}>
      <CCSizeWrap>
        <Dropdown />
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
          <div>
            <ToggleSwitch
              checked={aspect}
              label="Lock Aspect Ratio"
              onChange={() => setAspect(!aspect)}
            />
          </div>
        </div>
        <div className="btn-wrap">
          <BtnSecondary>
            <button>Close</button>
          </BtnSecondary>
          <BtnPrimary>
            <button>Resize</button>
          </BtnPrimary>
        </div>
      </CCSizeWrap>
    </Modal>
  );
}

function Dropdown() {
  return (
    <DropWrap>
      <div>---dropdown---</div>
    </DropWrap>
  );
}

const CCSizeWrap = styled.div`
  width: 450px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  .canvas-size-wrap {
    padding: 20px;
    background-color: ${(props) => props.theme.colors.secondaryColor};
    border-radius: ${(props) => props.theme.radius.medium};
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    .canvas-size {
      display: flex;
      gap: 20px;
      margin-bottom: 20px;
    }
  }
  .btn-wrap {
    display: flex;
    width: 200px;
    grid-template-columns: 10px;
    gap: 10px;
    div {
      width: 100%;
    }
  }
`;

const DropWrap = styled.div``;
