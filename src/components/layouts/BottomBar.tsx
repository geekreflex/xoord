import { styled } from 'styled-components';
import History from '../History';
import Zoom from '../Zoom';

export default function BottomBar() {
  return (
    <Wrap>
      <div></div>
      <div>
        <Zoom />
      </div>
      <div>
        <History />
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 300px;
  height: 50px;
  bottom: 20px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.radius.medium};
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;
