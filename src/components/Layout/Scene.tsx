import { styled } from 'styled-components';

export default function Scene() {
  return (
    <Wrap>
      <p>Scene</p>
    </Wrap>
  );
}

const Wrap = styled.div`
  border: 1px solid red;
  flex: 1;
`;
