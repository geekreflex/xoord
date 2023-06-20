import { styled } from 'styled-components';
import Toolbar from './layouts/Toolbar';
import AssetsPanel from './layouts/AssetsPanel';
import PropertiesPanel from './layouts/PropertiesPanel';
import Canvas from './Canvas';
import BottomBar from './layouts/BottomBar';

export default function Editor() {
  return (
    <Wrap>
      <Toolbar />
      <AssetsPanel />
      <PropertiesPanel />
      <Canvas />
      <BottomBar />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
`;
