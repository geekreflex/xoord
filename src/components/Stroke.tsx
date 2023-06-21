import { styled } from 'styled-components';
import Color from './Color';
import { useEditorContext } from '@/context/EditorContext';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setObject } from '@/features/editorSlice';

export default function Stroke() {
  const dispatch = useAppDispatch();
  const { object } = useAppSelector((state) => state.editor);
  const { editor } = useEditorContext();

  const handleStrokeChange = (color: string) => {
    console.log(color);
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject) {
        activeObject.set({ stroke: color });
      }
      dispatch(setObject({ stroke: color }));
    }
    editor?.canvas.renderAll();
  };

  return (
    <Wrap>
      <Color
        label={'Stroke'}
        color={object?.stroke as string}
        onChange={handleStrokeChange}
      />
    </Wrap>
  );
}

const Wrap = styled.div``;
