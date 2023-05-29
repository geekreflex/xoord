import { styled } from 'styled-components';
import Canvas from './Canvas';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Float from './Float';
import PropertiesPanel from './panels/properties/PropertiesPanel';
import ToolsPanel from './panels/tools/ToolsPanel';

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
        <PropertiesPanel />
        <ToolsPanel />
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
  height: calc(100% - 50px);
  flex: 1;
`;

const Scene = styled.div`
  flex: 1;
  width: calc(100% - 80px);
`;
