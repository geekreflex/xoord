import { styled } from 'styled-components';
import Canvas from '../Canvas';

export default function Scene() {
  return (
    <Wrap>
      <Canvas />
    </Wrap>
  );
}

const Wrap = styled.div`
  flex: 1;
  overflow: hidden;
  width: 100%;
`;
