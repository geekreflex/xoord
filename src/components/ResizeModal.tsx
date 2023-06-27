import { styled } from 'styled-components';
import Modal from './common/Modal';
import NumberInput from './common/NumberInput';
import { useEffect, useState } from 'react';
import { useEditorContext } from '@/context/EditorContext';
import { Button } from '@/styles/global';
import { useAppDispatch } from '@/app/hooks';
import { toggleResizeModal } from '@/features/appSlice';
import { LockIcon, UnlockIcon } from '@/icons';
import Option from './common/Option';

export default function ResizeModal() {
  const dispatch = useAppDispatch();
  const { editor } = useEditorContext();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [lock, setLock] = useState(false);

  useEffect(() => {
    if (editor) {
      setWidth(editor.workspace?.width! || 0);
      setHeight(editor.workspace?.height! || 0);
    }
  }, [editor]);

  const handleWidth = (width: number) => {
    setWidth(width);
    if (lock) {
      setHeight(width);
    }
  };

  const handleHeight = (height: number) => {
    setHeight(height);
    if (lock) {
      setWidth(height);
    }
  };

  const handleUpdateSize = () => {
    if (editor) {
      console.log(width, height);
      editor.setWorkspaceSize(width, height);
    }
    handleClose();
  };

  const handleClose = () => {
    dispatch(toggleResizeModal(false));
  };

  return (
    <Modal close={handleClose} title="Resize Template">
      <Wrap>
        <div className="select-presets">
          <p>Template Size Presets</p>
          <Option />
        </div>
        <div className="size-input-wrap">
          <div className="group-wrap">
            <p>Width</p>
            <div className="input-wrap">
              <NumberInput value={width} onChange={handleWidth} />
            </div>
          </div>
          <div className="lock-icon-wrap">
            <button className="iconn" onClick={() => setLock(!lock)}>
              {lock ? <LockIcon /> : <UnlockIcon />}
            </button>
          </div>
          <div className="group-wrap">
            <p>Height</p>
            <div className="input-wrap">
              <NumberInput value={height} onChange={handleHeight} />
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footer-action-btns">
            <div className="update btn">
              <Button onClick={handleUpdateSize}>Resize</Button>
            </div>
          </div>
        </div>
      </Wrap>
    </Modal>
  );
}

const Wrap = styled.div`
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .size-input-wrap {
    display: flex;
    gap: 5px;
    margin-bottom: 20px;
  }

  .lock-icon-wrap {
    display: flex;
    align-items: flex-end;
  }

  .group-wrap {
    display: flex;
    flex-direction: column;
  }
  p {
    font-size: 14px;
    margin-bottom: 5px;
    margin-left: 5px;
  }
`;
