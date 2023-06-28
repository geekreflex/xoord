import { styled } from 'styled-components';
import History from '../History';
import Zoom from '../Zoom';
import ThemeToggle from '../excerpt/ThemeToggle';
import { LineY } from '@/styles/global';
import {
  IoGridSharp,
  IoHandRightSharp,
  IoSettingsOutline,
} from 'react-icons/io5';

export default function BottomBar() {
  return (
    <Wrap>
      <div className="item-wrap">
        <button className="iconn">
          <IoHandRightSharp />
        </button>
        <ThemeToggle />
        <Zoom />
      </div>
      <LineY />
      <div className="item-wrap">
        <History />
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  min-width: 200px;
  max-width: 300px;
  height: 45px;
  bottom: 20px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.radius.small};
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  border: 1px solid ${(props) => props.theme.colors.borderColor};

  .item-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
