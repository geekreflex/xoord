import { styled } from 'styled-components';
import Navbar from './Layout/Navbar';
import Sidebar from './Layout/Sidebar';
import Scene from './Layout/Scene';
import Panel from './Layout/Panel';
import Footer from './Layout/Footer';

export default function Editor() {
  return (
    <Wrap>
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

const Wrap = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #eee;
  flex-direction: column;

  .main {
    display: flex;
    flex: 1;
  }

  .tools {
    display: flex;
  }

  .workstation {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
