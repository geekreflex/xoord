import { styled } from 'styled-components';

export default function Navbar() {
  return (
    <NavbarWrap>
      <div>Hello from navbar</div>
    </NavbarWrap>
  );
}

const NavbarWrap = styled.div`
  height: 50px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primaryColor};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  position: relative;
  z-index: 999;
`;
