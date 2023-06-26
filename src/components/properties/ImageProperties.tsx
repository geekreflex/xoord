import { styled } from 'styled-components';
import ObjOpt from '../ObtOpt';
import Shadow from '../Shadow';
import Stroke from '../Stroke';

export default function ImageProperties() {
  return (
    <Wrap>
      <ObjOpt />
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
