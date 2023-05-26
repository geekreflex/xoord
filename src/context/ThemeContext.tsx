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
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContextProps {
  theme: Theme;
  mode: ThemeMode;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: lightTheme,
  mode: ThemeMode.LIGHT,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [currentThemeMode, setCurrentThemeMode] = useState<ThemeMode>(
    loadThemeModePreference() ||
      (prefersDarkMode ? ThemeMode.DARK : ThemeMode.LIGHT)
  );

  const currentTheme = getCurrentTheme(currentThemeMode);

  function getCurrentTheme(themeMode: ThemeMode): Theme {
    return themeMode === ThemeMode.LIGHT ? lightTheme : darkTheme;
  }

  const toggleTheme = useCallback(() => {
    setCurrentThemeMode((prevMode) =>
      prevMode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT
    );
  }, []);

  function loadThemeModePreference(): ThemeMode | null {
    const storedThemeMode = localStorage.getItem('themeMode');
    return storedThemeMode === ThemeMode.LIGHT ||
      storedThemeMode === ThemeMode.DARK
      ? (storedThemeMode as ThemeMode)
      : null;
  }

  useEffect(() => {
    saveThemeModePreference(currentThemeMode);
  }, [currentThemeMode]);

  function saveThemeModePreference(themeMode: ThemeMode) {
    localStorage.setItem('themeMode', themeMode);
  }

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

export const useTheme = () => useContext(ThemeContext);
