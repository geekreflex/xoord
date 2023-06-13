import { styled } from 'styled-components';

export default function Sidebar() {
  return <Wrap></Wrap>;
}

const Wrap = styled.div`
  height: 100%;
  width: 50px;
  background-color: ${(props) => props.theme.colors.primary};
  border-right: 1px solid ${(props) => props.theme.colors.borderColor};
`;
