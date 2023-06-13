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
  background-color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
`;
