import { useEditorContext } from '@/context/EditorContext';
import Shapes from './elements/Shapes';
import { styled } from 'styled-components';

export default function ElementsTool() {
  const { elementTool } = useEditorContext();

  return (
    <ElementsWrap>{elementTool && <Shapes tool={elementTool} />}</ElementsWrap>
  );
}

const ElementsWrap = styled.div``;
