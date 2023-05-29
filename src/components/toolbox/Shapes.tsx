import { useEditorContext } from '@/context/EditorContext';
import { Circle, Rectangle } from './shapes';
import { styled } from 'styled-components';

export default function Shapes() {
  const { elementTool } = useEditorContext();

  // if (shapes)
  //   return (
  //     <ShapesWrap>
  //       <Circle shapes={shapes} />
  //       <Rectangle shapes={shapes} />
  //     </ShapesWrap>
  //   );

  return null;
}

const ShapesWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
