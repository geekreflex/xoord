import ToggleSwitch from '@/components/common/ToggleSwitch';
import { useEditorContext } from '@/context/EditorContext';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import RangeSlider from '@/components/common/RangeSlider';
import { DividerX, Title } from '@/styles/global';
import ColorBlock from '../shared/ColorBlock';

export default function Stroke() {
  const { editor, selectedObjects } = useEditorContext();
  const selectedObject = selectedObjects?.[0];
  const [hasStroke, setHasStroke] = useState<boolean>(false);
  const [strokeWidth, setStrokeWidth] = useState<number | undefined>(1);
  const [previousStroke, setPreviousStroke] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (selectedObject) {
      setHasStroke(selectedObject.stroke ? true : false);
      setPreviousStroke(selectedObject.stroke as string);
      setStrokeWidth(selectedObject.strokeWidth || undefined);
    }
  }, [selectedObject]);

  const handleToggleStroke = () => {
    if (selectedObject) {
      if (selectedObject.stroke) {
        setPreviousStroke(selectedObject.stroke as string);
        selectedObject.set('stroke', undefined);
      } else {
        const stroke = previousStroke || '#000000';
        selectedObject.set('stroke', stroke);
      }
      editor?.canvas.requestRenderAll();
      setHasStroke(!!selectedObject.stroke);
    }
  };

  const handleStrokeWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStrokeWidth = Number(e?.target.value);
    setStrokeWidth(newStrokeWidth);
    selectedObject?.set('strokeWidth', newStrokeWidth);
    editor?.canvas.renderAll();
  };

  const handleStroke = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedObject) {
      const stroke = e.target.value;
      selectedObject?.set('stroke', stroke);
      setPreviousStroke(stroke);
    }
    editor?.canvas.renderAll();
  };

  return (
    <StrokeWrap>
      <Title>Stroke</Title>
      <DividerX />
      <div className="fill-block-wrap">
        <ColorBlock
          color={selectedObject && (selectedObject.stroke as string)}
          onChange={handleStroke}
        />
        <ToggleSwitch
          checked={hasStroke}
          onChange={handleToggleStroke}
          id="fill"
        />
      </div>

      {hasStroke && (
        <RangeSlider
          onChange={handleStrokeWidth}
          value={strokeWidth?.toString() ?? '0'}
          min="0"
        />
      )}
      {strokeWidth}
    </StrokeWrap>
  );
}

const StrokeWrap = styled.div`
  .fill-block-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .block {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.colors.borderColor2};
  }
`;
