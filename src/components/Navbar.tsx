import { styled } from 'styled-components';
import History from './toolbox/History';
import DupDelLock from './toolbox/DupDelLock';
import { Zoom } from './toolbox';

export default function Navbar() {
  return (
    <NavbarWrap>
      <div>Logo</div>
      <div className="navbar-wrap-items">
        <History />
        <Zoom />
      </div>
      <DupDelLock />
    </NavbarWrap>
  );
}

const NavbarWrap = styled.div`
  height: 60px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primaryColor};
  position: relative;
  z-index: 999;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  .navbar-wrap-items {
    display: flex;
    gap: 20px;
  }
`;
