import { styled } from 'styled-components';
import Canvas from './Canvas';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Float from './Float';
import PropertiesPanel from './panels/properties/PropertiesPanel';
import ToolsPanel from './panels/tools/ToolsPanel';
import { useAppSelector } from '@/app/hooks';
import ResizeTemplate from './layouts/ResizeTemplate';

export default function Stage() {
  const { resizeTemplateModal } = useAppSelector((state) => state.app);
  return (
    <>
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
      {resizeTemplateModal && <ResizeTemplate />}
    </>
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
  height: calc(100% - 60px);
  flex: 1;
`;

const Scene = styled.div`
  flex: 1;
  width: calc(100% - 80px);
`;
