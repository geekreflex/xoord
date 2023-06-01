import ToggleSwitch from '@/components/common/ToggleSwitch';
import { useEditorContext } from '@/context/EditorContext';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import GroupCard from '../shared/GroupCard';
import RangeSlider from '@/components/common/RangeSlider';

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

  return (
    <GroupCard title="Stroke">
      <StrokeWrap>
        <div
          className="block"
          style={{
            backgroundColor:
              selectedObject && (selectedObject.stroke as string),
          }}
        ></div>
        <ToggleSwitch
          checked={hasStroke}
          onChange={handleToggleStroke}
          id="fill"
        />
      </StrokeWrap>
      {hasStroke && (
        <RangeSlider
          onChange={handleStrokeWidth}
          value={strokeWidth?.toString() ?? '0'}
        />
      )}
      {strokeWidth}
    </GroupCard>
  );
}

const StrokeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .block {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.colors.borderColor2};
  }
`;
