import { styled } from 'styled-components';
import Stage from './layouts/Stage';
import Navbar from './layouts/Navbar';
import Sidebar from './layouts/Sidebar';
import ToolsPanel from './panels/tools/ToolsPanel';
import PropertiesPanel from './panels/properties/PropertiesPanel';
import Float from './layouts/Float';
import Over from './layouts/Over';

export default function Layout() {
  return (
    <>
      <LayoutWrap>
        <Navbar />
        <Main>
          <Sidebar />
          <Stage />
        </Main>
        <ToolsPanel />
        <PropertiesPanel />
        <Float />
      </LayoutWrap>
      <Over />
    </>
  );
}

const LayoutWrap = styled.div`
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
