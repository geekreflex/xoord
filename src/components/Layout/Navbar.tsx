import { styled } from 'styled-components';

export default function Navbar() {
  return (
    <Wrap>
      <p>Navbar</p>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 50px;
  background-color: blue;
`;
