import { styled } from 'styled-components';
import Fill from '../Fill';
import ObjOpt from '../ObtOpt';

export default function ShapeProperties() {
  return (
    <Wrap className="props-wrap">
      <ObjOpt />
      <Fill />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
