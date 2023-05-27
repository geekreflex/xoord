import { styled } from 'styled-components';

export default function Navbar() {
  return (
    <NavbarWrap>
      <div></div>
    </NavbarWrap>
  );
}

const NavbarWrap = styled.div`
  height: 50px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primaryColor};
  position: relative;
  z-index: 999;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
`;
