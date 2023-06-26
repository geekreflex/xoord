import { styled } from 'styled-components';
import Fill from '../Fill';
import ObjOpt from '../ObtOpt';
import Stroke from '../Stroke';

export default function ShapeProperties() {
  return (
    <Wrap className="props-wrap">
      <ObjOpt />
      <Fill />
      <Stroke />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
