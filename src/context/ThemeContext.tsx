import { Theme, darkTheme, lightTheme } from '@/themes/theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
}

interface ThemeContextProps {
  theme: Theme;
  mode: ThemeMode;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: lightTheme,
  mode: ThemeMode.Light,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [currentThemeMode, setCurrentThemeMode] = useState<ThemeMode>(
    loadThemeModePreference() ||
      (prefersDarkMode ? ThemeMode.Dark : ThemeMode.Light)
  );

  const currentTheme = getCurrentTheme(currentThemeMode);

  function getCurrentTheme(themeMode: ThemeMode): Theme {
    return themeMode === ThemeMode.Light ? lightTheme : darkTheme;
  }

  const toggleTheme = useCallback(() => {
    setCurrentThemeMode((prevMode) =>
      prevMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light
    );
  }, []);

  function loadThemeModePreference(): ThemeMode | null {
    const storedThemeMode = localStorage.getItem('themeMode');
    return storedThemeMode === ThemeMode.Light ||
      storedThemeMode === ThemeMode.Dark
      ? (storedThemeMode as ThemeMode)
      : null;
  }

  function saveThemeModePreference(themeMode: ThemeMode) {
    localStorage.setItem('themeMode', themeMode);
  }

  useEffect(() => {
    saveThemeModePreference(currentThemeMode);
  }, [currentThemeMode]);

  const styledTheme: Theme = {
    ...currentTheme,
  };

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, mode: currentThemeMode, toggleTheme }}
    >
      <StyledThemeProvider theme={styledTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
