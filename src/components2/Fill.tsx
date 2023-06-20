import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { styled } from 'styled-components';
import Color from './Color';
import { useEditorContext } from '@/context/EditorContext';
import { setObject } from '@/features/editorSlice';

export default function Fill() {
  const dispatch = useAppDispatch();
  const { editor } = useEditorContext();
  const { object } = useAppSelector((state) => state.editor);

  const onFillChange = (color: string) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      activeObject?.set('fill', color);
      dispatch(setObject({ fill: color }));
      editor.canvas.renderAll();
    }
  };

  return (
    <Wrap>
      <Color color={object?.fill as string} onChange={onFillChange} />
    </Wrap>
  );
}

const Wrap = styled.div``;
