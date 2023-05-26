import { Theme, darkTheme, lightTheme } from '@/themes/theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ThemeContextProps {
  theme: Theme;
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: lightTheme,
  mode: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [currentTheme, setCurrentTheme] = useState(
    prefersDarkMode ? darkTheme : lightTheme
  );
  const [currentMode, setCurrentMode] = useState<'light' | 'dark'>(
    prefersDarkMode ? 'dark' : 'light'
  );

  useEffect(() => {
    persistThemeMode(currentMode);
  }, [currentMode]);

  const persistThemeMode = useCallback((mode: 'light' | 'dark') => {
    localStorage.setItem('mode', JSON.stringify(mode));
  }, []);

  const toggleTheme = useCallback(() => {
    setCurrentTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
    setCurrentMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    const handleDarkModeChange = (event: MediaQueryListEvent) => {
      setCurrentTheme(event.matches ? darkTheme : lightTheme);
      setCurrentMode(event.matches ? 'dark' : 'light');
    };
    mediaQueryList.addEventListener('change', handleDarkModeChange);
    return () => {
      mediaQueryList.removeEventListener('change', handleDarkModeChange);
    };
  }, []);

  const styledTheme: Theme = {
    ...currentTheme,
  };

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, mode: currentMode, toggleTheme }}
    >
      <StyledThemeProvider theme={styledTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
