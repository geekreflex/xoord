import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useEditorContext } from '@/context/EditorContext';
import { setObject } from '@/features/editorSlice';
import { styled } from 'styled-components';
import Color from './Color';

export default function Fill() {
  const dispatch = useAppDispatch();
  const { editor } = useEditorContext();
  const { object } = useAppSelector((state) => state.editor);

  const handleFillChange = (color: string) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject) {
        activeObject.set({ fill: color });
      }
      dispatch(setObject({ fill: color }));
    }
    editor?.canvas.renderAll();
  };

  // const handleClearFill = () => {
  //   if (editor) {
  //     const activeObject = editor.canvas.getActiveObject();
  //     activeObject?.set({ fill: undefined });
  //     dispatch(setObject({ fill: undefined }));
  //   }
  //   editor?.canvas.renderAll();
  // };

  return (
    <Wrap>
      <Color
        label={'Fill'}
        color={object?.fill as string}
        onChange={handleFillChange}
      />
    </Wrap>
  );
}

const Wrap = styled.div``;
