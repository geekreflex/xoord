import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useEditorContext } from '@/context/EditorContext';
import { setObject } from '@/features/editorSlice';
import { styled } from 'styled-components';
import { FILL } from '@/core/lib/defaultShapes';
import { useEffect, useRef, useState } from 'react';
import Expander from './common/Expander';
import ColorBlock from './common/ColorBlock';
import ColorPicker from './widget/ColorPicker';
import useClickOutside from '@/hooks/useClickOutside';

export default function Fill() {
  const dispatch = useAppDispatch();
  const ref = useRef(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const { editor } = useEditorContext();
  const { object } = useAppSelector((state) => state.editor);

  useEffect(() => {
    if (object && object.fill) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [object]);

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

  const handleAddFill = () => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      activeObject?.set({ fill: FILL });
      dispatch(setObject({ fill: FILL }));
      editor.canvas.renderAll();
      setChecked(true);
    }
  };

  const handleClearFill = () => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      activeObject?.set({ fill: undefined });
      dispatch(setObject({ fill: undefined }));
      editor.canvas.renderAll();
    }
  };

  const handleShowColorPicker = () => {
    setVisible(true);
  };

  const handleCloseColorPicker = () => {
    setVisible(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.checked;
    if (!val) {
      handleClearFill();
    } else {
      handleAddFill();
    }
    setChecked(val);
  };

  useClickOutside(ref, () => handleCloseColorPicker);

  return (
    <Expander
      checked={checked}
      onChange={handleChange}
      label={'Fill'}
      onAdd={handleAddFill}
    >
      <Wrap>
        <h4>Color</h4>
        <div className="color-block-wrap" ref={ref}>
          <ColorBlock
            color={object?.fill as string}
            onClick={handleShowColorPicker}
          />
          {visible && (
            <ColorPicker
              color={object?.fill as string}
              onChange={handleFillChange}
              label="Fill"
              close={() => handleCloseColorPicker}
            />
          )}
        </div>
      </Wrap>
    </Expander>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .color-block-wrap {
  }
`;
