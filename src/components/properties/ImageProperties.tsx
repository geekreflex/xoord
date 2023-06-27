import { styled } from 'styled-components';
import MoreAction from '../MoreAction';
import Shadow from '../Shadow';
import Stroke from '../Stroke';

export default function ImageProperties() {
  return (
    <Wrap>
      <MoreAction />
      <Shadow />
      <Stroke />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
