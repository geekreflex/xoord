import { NAVBAR_HEIGHT } from '@/utils/constants';
import { styled } from 'styled-components';
import Align from '../Align';
import Icon from '../shared/Icon';
import Tooltip from '../shared/Tooltip';
import FlipRotate from '../FlipRotate';

export default function Navbar() {
  return (
    <Wrap height={NAVBAR_HEIGHT}>
      <div>Awesome Editor</div>
      <div className="object-tools">
        <Align />
        <FlipRotate />
        <Tooltip content="Duplicate">
          <Icon name="copyIcon" />
        </Tooltip>
        <Tooltip content="Lock">
          <Icon name="unlockIcon" />
        </Tooltip>
        <Tooltip content="Delete">
          <Icon name="trashIcon" />
        </Tooltip>
      </div>
      <div>Right Side</div>
    </Wrap>
  );
}

interface WrapProps {
  height: number;
}

const Wrap = styled.div<WrapProps>`
  width: 100%;
  height: ${(props) => `${props.height}px`};
  background-color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;

  .object-tools {
    display: flex;
    gap: 5px;
  }
`;
