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
  background-color: #333;
  height: 100%;
  border: 1px solid green;
`;
