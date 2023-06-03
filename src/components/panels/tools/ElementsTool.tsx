import { useEditorContext } from '@/context/EditorContext';
import Shapes from './elements/Shapes';
import { styled } from 'styled-components';
import People from './elements/People';

export default function ElementsTool() {
  const { elementTool } = useEditorContext();

  return (
    <ElementsWrap>
      {elementTool && <Shapes tool={elementTool} />}
      <People />
    </ElementsWrap>
  );
}

const ElementsWrap = styled.div``;
