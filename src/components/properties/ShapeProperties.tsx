import { styled } from 'styled-components';
import Fill from '../Fill';
import MoreAction from '../MoreAction';
import Stroke from '../Stroke';
import Shadow from '../Shadow';

export default function ShapeProperties() {
  return (
    <Wrap className="props-wrap">
      <Fill />
      <Stroke />
      <MoreAction />
      <Shadow />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
