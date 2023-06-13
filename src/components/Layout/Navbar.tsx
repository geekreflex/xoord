import { useThemeContext } from '@/context/ThemeContext';
import { NAVBAR_HEIGHT } from '@/utils/constants';
import { styled } from 'styled-components';

export default function Navbar() {
  const { toggleTheme } = useThemeContext();
  return (
    <Wrap height={NAVBAR_HEIGHT}>
      <button onClick={toggleTheme}>toggle theme</button>
    </Wrap>
  );
}

interface WrapProps {
  height: number;
}

const Wrap = styled.div<WrapProps>`
  width: 100%;
  height: ${(props) => `${props.height}px`};
  background-color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
`;
