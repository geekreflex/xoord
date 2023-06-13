import { styled } from 'styled-components';

export default function Panel() {
  return (
    <Wrap>
      <p>Panel</p>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 300px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  border-right: 1px solid ${(props) => props.theme.colors.borderColor};
`;
