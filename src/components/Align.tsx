import { styled } from 'styled-components';
import Icon from './shared/Icon';
import Tooltip from './shared/Tooltip';

export default function Align() {
  return (
    <Wrap>
      <Tooltip content="Align">
        <Icon name="alignLeftIcon" />
      </Tooltip>
    </Wrap>
  );
}

const Wrap = styled.div``;
