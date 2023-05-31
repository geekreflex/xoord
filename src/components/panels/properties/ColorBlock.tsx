import ToggleSwitch from '@/components/common/ToggleSwitch';
import { useEditorContext } from '@/context/EditorContext';
import { fabric } from 'fabric';
import { useEffect } from 'react';
import { styled } from 'styled-components';

export function FillColorBlock({ shape }: { shape: fabric.Object }) {
  const { editor } = useEditorContext();

  useEffect(() => {}, []);

  const handleToggleFill = () => {
    editor?.canvas.renderAll();
  };

  return (
    <BlockWrap>
      {!undefined}
      <div className="block-wrap">
        <div
          className="block"
          style={{
            backgroundColor: shape.fill?.toString(),
          }}
        ></div>
        <p>Fill</p>
      </div>
      <ToggleSwitch checked={true} onChange={handleToggleFill} id="fill" />
    </BlockWrap>
  );
}

const BlockWrap = styled.div`
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
