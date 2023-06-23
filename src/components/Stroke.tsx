import { styled } from 'styled-components';
import Color from './Color';
import { useEditorContext } from '@/context/EditorContext';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setObject } from '@/features/editorSlice';
import { STROKE } from '@/core/lib/defaultShapes';
import NumberInput from './common/NumberInput';
import Select from './common/Select';

export default function Stroke() {
  const dispatch = useAppDispatch();
  const { object } = useAppSelector((state) => state.editor);
  const { editor } = useEditorContext();

  const handleStrokeChange = (color: string) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject) {
        activeObject.set({ stroke: color });
        dispatch(setObject({ stroke: color }));
      }
      editor.canvas.renderAll();
    }
  };

  const handleAddStroke = () => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      activeObject?.set({ stroke: STROKE });
      dispatch(setObject({ stroke: STROKE }));
      editor.canvas.renderAll();
    }
  };

  const handleClearStroke = () => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      activeObject?.set({ stroke: undefined });
      dispatch(setObject({ stroke: undefined }));
      editor.canvas.renderAll();
    }
  };

  const handleStrokeWidth = (width: number) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      activeObject?.set({ strokeWidth: width });
      dispatch(setObject({ strokeWidth: width }));
      editor.canvas.renderAll();
    }
  };

  const handleStrokeStyle = (value: string) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      const arr = value ? value.split(' ').map(Number) : [];
      activeObject?.set({ strokeDashArray: arr });
      dispatch(setObject({ strokeDashArray: arr }));
      editor.canvas.renderAll();
    }
  };

  const strokeStyles = [
    { label: 'Solid', value: '' },
    { label: 'Dashed', value: '30 10' },
    { label: 'Dotted', value: '5 5' },
  ];

  return (
    <Wrap className="prop-wrap">
      <h4>Stroke</h4>
      <div className="main-wrap">
        <Color
          label={'Stroke'}
          color={object?.stroke as string}
          onChange={handleStrokeChange}
          clear={handleClearStroke}
          add={handleAddStroke}
        />
        {object?.stroke && (
          <div className="other-props">
            <div className="stroke-width-wrap">
              <NumberInput
                value={object?.strokeWidth || 0}
                onChange={handleStrokeWidth}
              />
            </div>
            <div className="stroke-style-wrap">
              <Select
                options={strokeStyles}
                value={object?.strokeDashArray?.join(' ') || ''}
                onChange={handleStrokeStyle}
              />
            </div>
          </div>
        )}
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  .main-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .stroke-width-wrap {
    width: 40%;
  }

  .stroke-style-wrap {
    width: 60%;
  }

  .other-props {
    display: flex;
    gap: 10px;
  }
`;
