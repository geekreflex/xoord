import { styled } from 'styled-components';

export default function View() {
  return (
    <Wrap>
      <main></main>
      <div className="tool-bar bar"></div>
      <div className="left-bar bar"></div>
      <div className="right-bar bar"></div>
      <div className="bottom-bar bar"></div>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  main {
    width: 500px;
    height: 500px;
    background-color: ${(props) => props.theme.colors.panelBg};
  }

  .bar {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 8px;
  }

  .tool-bar {
    width: 60px;
    position: fixed;
    height: 90vh;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${(props) => props.theme.colors.panelBg};
  }

  .left-bar {
    width: 250px;
    height: 90vh;
    position: fixed;
    top: 50%;
    left: 85px;
    transform: translateY(-50%);
  }

  .right-bar {
    width: 250px;
    height: 90vh;
    top: 50%;
    right: 20px;
    position: fixed;
    transform: translateY(-50%);
  }

  .bottom-bar {
    width: 300px;
    height: 50px;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    background-color: ${(props) => props.theme.colors.panelBg};
  }
`;
