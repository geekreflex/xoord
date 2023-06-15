import { styled } from 'styled-components';

export default function Popup({ children }: { children: React.ReactNode }) {
  return <Wrap>{children}</Wrap>;
}

const Wrap = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  position: absolute;
  bottom: 50px;
  padding: 5px 0;
  border-radius: ${(props) => props.theme.radius.medium};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  z-index: 998;
`;
