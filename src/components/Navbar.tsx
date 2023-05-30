import { styled } from 'styled-components';
import History from './toolbox/History';

export default function Navbar() {
  return (
    <NavbarWrap>
      <div>
        <History />
      </div>
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
  display: flex;
  align-items: center;
`;
