import { styled } from 'styled-components';

export default function Footer() {
  return (
    <Wrap>
      <p>Footer</p>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 40px;
  background-color: ${(props) => props.theme.colors.primary};
  border-top: 1px solid ${(props) => props.theme.colors.borderColor};
`;
