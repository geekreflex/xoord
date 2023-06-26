import { styled } from 'styled-components';
import Fill from '../Fill';
import ObjOpt from '../ObtOpt';
import Stroke from '../Stroke';
import Shadow from '../Shadow';

export default function ShapeProperties() {
  return (
    <Wrap className="props-wrap">
      <Fill />
      <Stroke />
      <ObjOpt />
      <Shadow />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
