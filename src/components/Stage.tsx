import { styled } from 'styled-components';
import Canvas from './Canvas';
import Sidebar from './Sidebar';
import Zoom from './Zoom';
import Navbar from './Navbar';

export default function Stage() {
  return (
    <StageWrap>
      <Navbar />
      <Main>
        <Sidebar />
        <Scene>
          <Canvas />
        </Scene>
        <Zoom />
      </Main>
    </StageWrap>
  );
}

const StageWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #eee;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
`;

const Scene = styled.div`
  flex: 1;
`;
