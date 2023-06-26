import { styled } from 'styled-components';
import Fill from '../Fill';
import ObjOpt from '../ObtOpt';
import Stroke from '../Stroke';

export default function ShapeProperties() {
  return (
    <Wrap className="props-wrap">
      <Fill />
      <Stroke />
      <ObjOpt />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
