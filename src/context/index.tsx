import { AppProvider } from './AppContext';
import { EditorProvider } from './EditorContext';
import { ThemeProvider } from './ThemeContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <EditorProvider>
        <AppProvider>{children}</AppProvider>
      </EditorProvider>
    </ThemeProvider>
  );
}
