import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useEditorContext } from '@/context/EditorContext';
import { setObject } from '@/features/editorSlice';
import { styled } from 'styled-components';
import ColorPicker from './widget/ColorPicker';
import { useRef, useState } from 'react';

export default function FillColorBlock() {
  const dispatch = useAppDispatch();
  const { editor } = useEditorContext();
  const { object } = useAppSelector((state) => state.editor);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const handleFillChange = (color: string) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject) {
        activeObject.set({ fill: color });
        dispatch(setObject({ fill: color }));
      }
      editor.canvas.renderAll();
    }
  };

  return (
    <Wrap ref={ref}>
      <div
        onClick={() => setVisible(true)}
        className="color-block"
        style={{ backgroundColor: object?.fill! as string }}
      >
        <span className="color-block-angle"></span>
      </div>
      {visible && (
        <ColorPicker
          color={object?.fill as string}
          onChange={handleFillChange}
          label={'Fill'}
          close={() => setVisible(false)}
        />
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  .color-block {
    display: flex;
    width: 32px;
    height: ${(props) => props.theme.resets.btnInputHeight};
    cursor: pointer;
    position: relative;
    border-radius: ${(props) => props.theme.radius.small};
  }

  .color-block-angle {
    position: absolute;
    width: 0;
    height: 0;
    border-bottom: 8px solid transparent;
    border-top: 8px solid transparent;
    border-left: 8px solid ${(props) => props.theme.colors.secondary};
    transform: rotate(45deg);
    right: 2px;
    bottom: -3px;
    display: block;
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
  }
`;
