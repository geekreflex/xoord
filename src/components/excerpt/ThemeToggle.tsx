import { useThemeContext } from '@/context/ThemeContext';
import { styled } from 'styled-components';

export default function ThemeToggle() {
  const { mode } = useThemeContext();
  return <Wrap>{mode === 'dark' ? 'd' : 'light'}</Wrap>;
}

const Wrap = styled.div``;
