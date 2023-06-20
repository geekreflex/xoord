import { styled } from 'styled-components';
import Toolbar from './layouts/Toolbar';
import AssetsPanel from './layouts/AssetsPanel';
import PropertiesPanel from './layouts/PropertiesPanel';
import Canvas from './Canvas';
import BottomBar from './layouts/BottomBar';
import ColorPicker from './widget/ColorPicker';

export default function Editor() {
  return (
    <Wrap>
      <Toolbar />
      <AssetsPanel />
      <PropertiesPanel />
      <Canvas />
      <BottomBar />
      <ColorPicker />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
`;
