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

const Wrap = styled.div`
  button {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #fff;
    background: transparent;
    outline: none;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    &:hover {
      background-color: #fff;
      color: #111;
    }
  }
`;
