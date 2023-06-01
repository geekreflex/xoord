import ToggleSwitch from '@/components/common/ToggleSwitch';
import { useEditorContext } from '@/context/EditorContext';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

export default function Stroke() {
  const { editor, selectedObjects } = useEditorContext();
  const selectedObject = selectedObjects?.[0];
  const [hasStroke, setHasStroke] = useState<boolean>(false);
  const [previousStroke, setPreviousStroke] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (selectedObject) {
      setHasStroke(selectedObject.stroke ? true : false);
      setPreviousStroke(selectedObject.stroke as string);
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

  return (
    <StrokeWrap>
      <div className="block-wrap">
        <div
          className="block"
          style={{
            backgroundColor:
              selectedObject && (selectedObject.stroke as string),
          }}
        ></div>
        <p>Stroke</p>
      </div>
      <ToggleSwitch
        checked={hasStroke}
        onChange={handleToggleStroke}
        id="fill"
      />
    </StrokeWrap>
  );
}

const StrokeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .block-wrap {
    display: flex;
    align-items: center;
    p {
      margin-left: 10px;
      font-size: 14px;
    }
  }

  .block {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.colors.borderColor2};
  }
`;
