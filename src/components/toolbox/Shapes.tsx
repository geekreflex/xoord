import { useEditor } from '@/context/EditorContext';
import { Circle, Rectangle } from './shapes';
import { styled } from 'styled-components';

export default function Shapes() {
  const { shapes } = useEditor();

  if (shapes)
    return (
      <ShapesWrap>
        <Circle shapes={shapes} />
        <Rectangle shapes={shapes} />
      </ShapesWrap>
    );
}

const ShapesWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
