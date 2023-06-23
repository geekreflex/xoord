import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useEditorContext } from '@/context/EditorContext';
import { setObject } from '@/features/editorSlice';
import { styled } from 'styled-components';
import Color from './Color';
import { FILL } from '@/core/lib/defaultShapes';

export default function Fill() {
  const dispatch = useAppDispatch();
  const { editor } = useEditorContext();
  const { object } = useAppSelector((state) => state.editor);

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

  return (
    <Wrap className="prop-wrap">
      <h4>Fill</h4>
      <Color
        label={'Fill'}
        color={object?.fill as string}
        onChange={handleFillChange}
        clear={handleClearFill}
        add={handleAddFill}
      />
    </Wrap>
  );
}

const Wrap = styled.div``;
