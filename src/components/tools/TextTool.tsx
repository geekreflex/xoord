import { useEditorContext } from '@/context/EditorContext';
import { styled } from 'styled-components';

export default function TextTool() {
  const { tool } = useEditorContext();
  return (
    <Wrap>
      <button onClick={() => tool?.addText()}>Add Text</button>
    </Wrap>
  );
}

const Wrap = styled.div``;
