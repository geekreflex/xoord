import { styled } from 'styled-components';
import Modal from '../common/Modal';
import CustomInput from '../common/CustomInput';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { toggleReszieTempleteModal } from '@/features/appSlice';
import ToggleSwitch from '../common/ToggleSwitch';
import { BtnPrimary, BtnSecondary } from '@/styles/global';
import { ArrowDownIcon } from '@/icons';
import { useEditorContext } from '@/context/EditorContext';
import { setWorkspace } from '@/features/editorSlice';

export default function ResizeTemplate() {
  const dispatch = useAppDispatch();
  const { editor } = useEditorContext();
  const { workspace } = useAppSelector((state) => state.editor);
  const [aspect, setAspect] = useState(false);
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  useEffect(() => {
    setWidth(workspace.width.toString());
    setHeight(workspace.height.toString());
  }, [workspace]);

  const handleWidth = (val: string) => {
    setWidth(val);
  };

  const handleHeight = (val: string) => {
    setHeight(val);
  };

  const handleUpdateSize = () => {
    if (editor) {
      editor.setSize(Number(width), Number(height));
    }
    dispatch(setWorkspace({ width, height }));
    closeModal();
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
            <button onClick={closeModal}>Close</button>
          </BtnSecondary>
          <BtnPrimary>
            <button onClick={handleUpdateSize}>Resize</button>
          </BtnPrimary>
        </div>
      </CCSizeWrap>
    </Modal>
  );
}

function Dropdown() {
  const [selectedTemplate, setSelectedTemplate] = useState('');

  return (
    <DropWrap>
      <p className="dropdown-title">Template Size Presets</p>
      <button className="dropdown-btn">
        <div className="dropdown-btn-text">
          <p>Letter</p>
          <p>8.5&times;11''</p>
        </div>
        <span className="dropdown-btn-icon">
          <ArrowDownIcon />
        </span>
      </button>
      <div></div>
    </DropWrap>
  );
}

const CCSizeWrap = styled.div`
  width: 450px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  .canvas-size-wrap {
    padding: 20px;
    background-color: ${(props) => props.theme.colors.secondaryColor};
    border-radius: ${(props) => props.theme.radius.small};
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

const DropWrap = styled.div`
  display: flex;
  flex-direction: column;

  .dropdown-title {
    font-size: 14px;
    margin-bottom: 8px;
  }

  .dropdown-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    outline: none;
    height: 35px;
    padding: 0 8px;
    border-radius: ${(props) => props.theme.radius.small};
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    gap: 10px;
    background-color: ${(props) => props.theme.colors.primaryColor};
    cursor: pointer;
  }

  .dropdown-btn-text {
    display: flex;
    flex: 1;
    justify-content: space-between;
  }

  .dropdown-btn-icon {
    display: flex;
    font-size: 12px;
    svg,
    path {
      stroke-width: 4px;
    }
  }
`;
