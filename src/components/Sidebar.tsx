import { styled } from 'styled-components';
import { Shapes } from './toolbox';

export default function Tool() {
  return (
    <SidebarWrap>
      <Shapes />
    </SidebarWrap>
  );
}

const SidebarWrap = styled.div`
  background-color: #fff;
`;
