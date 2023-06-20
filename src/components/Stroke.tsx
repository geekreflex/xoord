import { styled } from 'styled-components';
import Color from './Color';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useEditorContext } from '@/context/EditorContext';
import { setObject } from '@/features/editorSlice';
import Expander from './shared/Expander';
import RangeSlider from './shared/RangeSlider';
import { useEffect, useState } from 'react';

export default function Stroke() {
  const dispatch = useAppDispatch();
  const { editor } = useEditorContext();
  const { object } = useAppSelector((state) => state.editor);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (object) {
      setChecked(object.stroke ? true : false);
    }
  }, [object]);

  const onStrokeFill = (color: string) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      activeObject?.set('stroke', color);
      dispatch(setObject({ stroke: color }));
      editor.canvas.renderAll();
    }
  };

  const onStrokeWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const width = Number(e.target.value);
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      activeObject?.set('strokeWidth', width);
      dispatch(setObject({ strokeWidth: width }));
      editor.canvas.renderAll();
    }
  };

  const onChange = (val: boolean) => {
    setChecked(val);
  };

  return (
    <Expander checked={checked} onChange={onChange} label="Outline">
      <Wrap>
        <div className="color-wrap">
          <span className="label">Color</span>
          <Color color={object?.stroke as string} onChange={onStrokeFill} />
        </div>
        <div className="thickness">
          <div className="label label-block">Thickness</div>
          <RangeSlider
            min={0}
            max={100}
            value={object?.strokeWidth!}
            onChange={onStrokeWidth}
          />
        </div>
      </Wrap>
    </Expander>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .label {
    font-size: 14px;
  }

  .color-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .thickness {
    .label-block {
      margin-bottom: 5px;
    }
  }
`;
