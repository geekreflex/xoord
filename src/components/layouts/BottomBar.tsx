import { styled } from 'styled-components';

export default function BottomBar() {
  return <Wrap></Wrap>;
}

const Wrap = styled.div`
  position: fixed;
  width: 300px;
  height: 50px;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.radius.medium};
  z-index: 9;
`;
