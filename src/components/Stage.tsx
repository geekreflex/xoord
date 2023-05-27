import { styled } from 'styled-components';
import Canvas from './Canvas';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Float from './Float';

export default function Stage() {
  return (
    <StageWrap>
      <Navbar />
      <Main>
        <Sidebar />
        <Scene>
          <Canvas />
        </Scene>
        <Float />
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
  overflow: hidden;
`;

const Main = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
`;

const Scene = styled.div`
  flex: 1;
  max-width: 100%;
`;
