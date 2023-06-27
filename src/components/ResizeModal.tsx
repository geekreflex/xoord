import { styled } from 'styled-components';
import Modal from './common/Modal';
import NumberInput from './common/NumberInput';
import { useEffect, useState } from 'react';
import { useEditorContext } from '@/context/EditorContext';
import { Button } from '@/styles/global';

export default function ResizeModal() {
  const { editor } = useEditorContext();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (editor) {
      setWidth(editor.workspace?.width! || 0);
      setHeight(editor.workspace?.height! || 0);
    }
  }, [editor]);

  const handleWidth = (width: number) => {
    console.log(width);
    setWidth(width);
  };

  const handleHeight = (height: number) => {
    setHeight(height);
  };

  const handleUpdateSize = () => {
    if (editor) {
      console.log(width, height);
      editor.setWorkspaceSize(width, height);
    }
  };

  return (
    <Modal>
      <Wrap>
        <div className="size-input-wrap">
          <div className="group-wrap">
            <p>Width</p>
            <div className="input-wrap">
              <NumberInput value={width} onChange={handleWidth} />
            </div>
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
              <Button onClick={handleUpdateSize}>Update</Button>
            </div>
          </div>
        </div>
      </Wrap>
    </Modal>
  );
}

const Wrap = styled.div`
  width: 500px;
  padding: 20px;

  .size-input-wrap {
    display: flex;
    gap: 20px;
  }

  .group-wrap {
    display: flex;
    flex-direction: column;

    p {
      font-size: 14px;
      margin-bottom: 5px;
    }
  }
`;
