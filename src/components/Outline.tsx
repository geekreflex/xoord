import { styled } from 'styled-components';
import Color from './Color';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useEditorContext } from '@/context/EditorContext';
import { setObject } from '@/features/editorSlice';
import Expander from './shared/Expander';

export default function Outline() {
  const dispatch = useAppDispatch();
  const { editor } = useEditorContext();
  const { object } = useAppSelector((state) => state.editor);

  const onStrokeChange = (color: string) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      activeObject?.set('stroke', color);
      dispatch(setObject({ stroke: color }));
      editor.canvas.renderAll();
    }
  };

  return (
    <Expander checked={false} onChange={() => console}>
      <Wrap>
        <Color color={object?.stroke as string} onChange={onStrokeChange} />
      </Wrap>
    </Expander>
  );
}

const Wrap = styled.div``;
