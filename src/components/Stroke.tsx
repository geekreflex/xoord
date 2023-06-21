import { styled } from 'styled-components';
import Color from './Color';
import { useEditorContext } from '@/context/EditorContext';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { setObject } from '@/features/editorSlice';
import { STROKE } from '@/core/lib/defaultShapes';
import NumberInput from './common/NumberInput';

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
            <NumberInput
              value={object?.strokeWidth || 0}
              onChange={handleStrokeWidth}
            />
            <div className="style">Dashed</div>
          </div>
        )}
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 0 10px;

  .main-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .other-props {
    display: flex;
    gap: 10px;
    height: 35px;

    .width,
    .style {
      height: 100%;
      background-color: ${(props) => props.theme.colors.secondary};
      border-radius: ${(props) => props.theme.radius.medium};
      cursor: pointer;
      padding: 0 10px;
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 600;
    }

    .width {
      width: 40%;
    }

    .style {
      width: 60%;
    }
  }
`;
