import Icon from '../common/Icon';
import { styled } from 'styled-components';
import Popup from '../common/Popup';
import { useEffect, useRef, useState } from 'react';
import { useEditorContext } from '@/context/EditorContext';
import { Input } from '../common/Input';
import useClickOutside from '@/hooks/useClickOutside';
import { useAppDispatch } from '@/app/hooks';
import { setCurrentZoom } from '@/features/editorSlice';

export default function ResizeCanvas() {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { editor } = useEditorContext();
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const handleWidth = (value: string) => {
    if (editor) {
      editor.setSize(Number(value), height);
    }
    updateZoom();
    setWidth(Number(value));
  };

  const handleHeight = (value: string) => {
    if (editor) {
      editor.setSize(width, Number(value));
    }
    updateZoom();
    setHeight(Number(value));
  };

  useEffect(() => {
    if (editor) {
      setWidth(editor.workspace?.width || 0);
      setHeight(editor.workspace?.height || 0);
    }
  }, [editor]);

  const updateZoom = () => {
    setTimeout(() => {
      dispatch(setCurrentZoom(editor?.canvas.getZoom()));
    }, 50);
  };

  const onShowResize = () => {
    setVisible(!visible);
  };

  useClickOutside(ref, () => setVisible(false));

  return (
    <RCWrap ref={ref}>
      <Icon name="bgIcon" size="big" click={onShowResize} />
      {visible && (
        <Popup title="Canvas Size" close={onShowResize}>
          <RCMain>
            <div className="input-group">
              <Input
                value={width?.toString()}
                sin={'W'}
                onChange={handleWidth}
              />
              <Input
                value={height?.toString()}
                sin={'H'}
                onChange={handleHeight}
              />
            </div>
          </RCMain>
        </Popup>
      )}
    </RCWrap>
  );
}

const RCWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
const RCMain = styled.div`
  display: flex;
  width: 400px;

  .input-group {
    display: flex;
    gap: 20px;
  }
`;
