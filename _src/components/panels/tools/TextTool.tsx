import { useEditorContext } from '@/context/EditorContext';
import { BtnPrimary } from '@/styles/global';
import { styled } from 'styled-components';

export default function TextTool() {
  const { textTool } = useEditorContext();

  const handleAddText = () => {
    if (textTool) {
      textTool.addText();
    }
  };

  return (
    <TextToolWrap>
      <div>
        <BtnPrimary>
          <button onClick={handleAddText}>Add your text</button>
        </BtnPrimary>
      </div>
    </TextToolWrap>
  );
}

const TextToolWrap = styled.div``;
