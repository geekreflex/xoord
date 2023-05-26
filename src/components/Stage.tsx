import { styled } from 'styled-components';
import Canvas from './Canvas';
import Tool from './Tool';
import Zoom from './Zoom';

export default function Stage() {
  return (
    <StageWrap>
      <LeftStage>
        <div className="inner">
          <Tool />
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  height: 100vh;

  .inner {
    height: 500px;
    background-color: #fff;
    padding: 30px 10px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  }
`;
const Scene = styled.div`
  flex: 1;
  width: calc(100% - 300px);
`;
