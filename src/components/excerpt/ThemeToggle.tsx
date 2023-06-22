import { useThemeContext } from '@/context/ThemeContext';
import { MoonIcon, SunIcon } from '@/icons';
import { styled } from 'styled-components';

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeContext();

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <Wrap>
      <span className="iconn" onClick={handleToggle}>
        {mode == 'dark' ? <MoonIcon /> : <SunIcon />}
      </span>
    </Wrap>
  );
}

const Wrap = styled.div``;
