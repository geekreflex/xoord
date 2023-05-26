import { styled } from 'styled-components';
import { Shapes } from './toolbox';
import { useTheme } from '@/context/ThemeContext';

export default function Tool() {
  const { toggleTheme } = useTheme();
  return (
    <SidebarWrap>
      <Shapes />
      <button onClick={toggleTheme}> Toggle Theme</button>
    </SidebarWrap>
  );
}

const SidebarWrap = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
`;
