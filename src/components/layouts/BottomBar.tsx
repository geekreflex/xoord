import { styled } from 'styled-components';
import History from '../History';
import Zoom from '../Zoom';
import ThemeToggle from '../excerpt/ThemeToggle';
import { LineY } from '@/styles/global';

export default function BottomBar() {
  return (
    <Wrap>
      <div className="item-wrap">
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
  border-radius: ${(props) => props.theme.radius.medium};
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  .item-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
