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
      <div className="zoom-range">
        <RangeSlider min={8} max={400} value={currentZoom} onChange={onZoom} />
      </div>
      <div className="zoom-value">{currentZoom.toFixed(0)}%</div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  width: 250px;
  align-items: center;
  gap: 10px;

  .zoom-range {
    width: 100%;
  }

  .zoom-value {
    width: 80px;
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    font-size: 12px;
  }
`;
