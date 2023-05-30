import { styled } from 'styled-components';
import History from './toolbox/History';
import DupDelLock from './toolbox/DupDelLock';

export default function Navbar() {
  return (
    <NavbarWrap>
      <div>Logo</div>
      <div>
        <History />
      </div>
      <DupDelLock />
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
  justify-content: space-between;
  padding: 0 20px;
`;
