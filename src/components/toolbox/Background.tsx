import Icon from '../common/Icon';
import { styled } from 'styled-components';

export default function Background() {
  return (
    <BgWrap>
      <Icon name="bgIcon" size="big" />
    </BgWrap>
  );
}

const BgWrap = styled.div``;
