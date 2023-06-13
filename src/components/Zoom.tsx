import { styled } from 'styled-components';
import RangeSlider from './shared/RangeSlider';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useEditorContext } from '@/context/EditorContext';
import { setCurrentZoom } from '@/features/editorSlice';
import { useEffect } from 'react';

export default function Zoom() {
  const dispatch = useAppDispatch();
  const { editor } = useEditorContext();
  const { currentZoom } = useAppSelector((state) => state.editor);

  useEffect(() => {
    if (editor) {
      dispatch(setCurrentZoom(editor.canvas.getZoom() * 100));
    }
  }, [editor]);

  const onZoom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const zoom = e.target.value;
    const normZoom = Number(zoom) / 100;
    if (editor) {
      editor.setZoomAuto(normZoom);
    }
    dispatch(setCurrentZoom(zoom));
  };

  return (
    <Wrap>
      <RangeSlider
        min={8}
        max={400}
        value={currentZoom}
        step={10}
        onChange={onZoom}
      />
    </Wrap>
  );
}

const Wrap = styled.div``;
