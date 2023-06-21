import { styled } from 'styled-components';
import Toolbar from './layouts/Toolbar';
import AssetsPanel from './layouts/AssetsPanel';
import PropertiesPanel from './layouts/PropertiesPanel';
import Canvas from './Canvas';
import BottomBar from './layouts/BottomBar';

export default function Editor() {
  return (
    <Wrap>
      <div className="left-side">
        <Toolbar />
        <AssetsPanel />
      </div>
      <div className="right-side">
        <PropertiesPanel />
      </div>
      <Canvas />
      <div className="bottom">
        <BottomBar />
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100vh;

  .left-side {
    display: flex;
    position: fixed;
    gap: 10px;
    left: 20px;
    height: 100vh;
    align-items: center;
    z-index: 998;
    pointer-events: none;

    * {
      pointer-events: all;
    }
  }

  .right-side {
    position: fixed;
    right: 20px;
    height: 100vh;
    display: flex;
    align-items: center;
    top: 0;
    z-index: 998;
    pointer-events: none;

    * {
      pointer-events: all;
    }
  }

  .bottom {
    position: fixed;
    width: 100%;
    display: flex;
    z-index: 998;
    bottom: 20px;
    justify-content: center;
    pointer-events: none;

    * {
      pointer-events: all;
    }
  }
`;
