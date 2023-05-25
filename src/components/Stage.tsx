import { styled } from 'styled-components';
import Canvas from './Canvas';
import Tool from './Tool';

export default function Stage() {
  return (
    <StageWrap>
      <LeftStage>
        <Tool />
      </LeftStage>
      <Scene>
        <Canvas />
      </Scene>
    </StageWrap>
  );
}

const StageWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
`;

const LeftStage = styled.div`
  width: 300px;
  background-color: #ffffff;
`;
const Scene = styled.div`
  flex: 1;
  width: calc(100% - 300px);
`;
