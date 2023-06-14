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
import { useAppSelector } from '@/app/hooks';
import Float from './Layout/Float';

export default function Editor() {
  const { layout } = useAppSelector((state) => state.app);
  const props = {
    navbarHeight: NAVBAR_HEIGHT,
    leftSideWidth: PANEL_WIDTH + SIDEBAR_WIDTH,
    footerHeight: FOOTER_HEIGHT,
  };

  return (
    <Wrap data={props} layout={layout}>
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
      <Float />
    </Wrap>
  );
}

interface WrapProps {
  layout: string;
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
    order: ${(props) => (props.layout === 'left' ? 1 : 2)};
  }

  .workstation {
    width: ${(props) => `calc(100% - ${props.data.leftSideWidth}px)`};
    display: flex;
    flex-direction: column;
    order: ${(props) => (props.layout === 'left' ? 2 : 1)};
  }
`;
