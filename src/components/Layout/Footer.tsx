import { FOOTER_HEIGHT } from '@/utils/constants';
import { styled } from 'styled-components';
import Zoom from '../Zoom';
import History from '../History';
import Icon from '../shared/Icon';
import Tooltip from '../shared/Tooltip';
import { useAppDispatch } from '@/app/hooks';
import { toggleSettingsModal } from '@/features/appSlice';
import Layers from '../Layers';

export default function Footer() {
  const dispatch = useAppDispatch();

  const showSettings = () => {
    dispatch(toggleSettingsModal());
  };

  return (
    <Wrap height={FOOTER_HEIGHT}>
      <div className="footer-left">
        <Tooltip content="Settings">
          <Icon name="settingsIcon" click={showSettings} />
        </Tooltip>
        <Layers />
      </div>
      <Zoom />
      <History />
    </Wrap>
  );
}

interface WrapProps {
  height: number;
}

const Wrap = styled.div<WrapProps>`
  height: ${(props) => `${props.height}px`};
  background-color: ${(props) => props.theme.colors.primary};
  border-top: 1px solid ${(props) => props.theme.colors.borderColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  .footer-left {
    display: flex;
    gap: 5px;
  }
`;
