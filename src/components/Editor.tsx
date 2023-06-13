import { styled } from 'styled-components';
import Navbar from './Layout/Navbar';
import Sidebar from './Layout/Sidebar';
import Scene from './Layout/Scene';
import Panel from './Layout/Panel';
import Footer from './Layout/Footer';
import {
  FOOTER_HEIGHT,
  NAVBAR_HEIGHT,
  PANEL_WIDTH,
  SIDEBAR_WIDTH,
} from '@/utils/constants';

export default function Editor() {
  const props = {
    navbarHeight: NAVBAR_HEIGHT,
    leftSideWidth: PANEL_WIDTH + SIDEBAR_WIDTH,
    footerHeight: FOOTER_HEIGHT,
  };

  return (
    <Wrap data={props}>
      <Navbar />
      <div className="main">
        <div className="tools">
          <Sidebar />
          <Panel />
        </div>
        <div className="workstation">
          <Scene />
          <Footer />
        </div>
      </div>
    </Wrap>
  );
}

interface WrapProps {
  data: {
    navbarHeight: number;
    leftSideWidth: number;
    footerHeight: number;
  };
}

const Wrap = styled.div<WrapProps>`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #eee;
  flex-direction: column;
  overflow: hidden;

  .main {
    display: flex;
    height: ${(props) => `calc(100% - ${props.data.navbarHeight}px)`};
  }

  .tools {
    display: flex;
  }

  .workstation {
    width: ${(props) => `calc(100% - ${props.data.leftSideWidth}px)`};
    display: flex;
    flex-direction: column;
  }
`;
