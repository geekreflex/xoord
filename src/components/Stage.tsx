import { styled } from 'styled-components';
import Canvas from './Canvas';
import Sidebar from './Sidebar';
import Zoom from './Zoom';

export default function Stage() {
  return (
    <StageWrap>
      <LeftStage>
        <div className="inner">
          <Sidebar />
        </div>
      </LeftStage>
      <Scene>
        <Canvas />
        <Zoom />
      </Scene>
    </StageWrap>
  );
}

const StageWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  background-color: #eee;
`;

const LeftStage = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;

  .inner {
    height: 500px;
    border-radius: 20px;
  }
`;
const Scene = styled.div`
  flex: 1;
  width: calc(100% - 300px);
`;
