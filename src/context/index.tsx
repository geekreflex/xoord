import { EditorProvider } from './EditorContext';
import { ThemeProvider } from './ThemeContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <EditorProvider>{children}</EditorProvider>
    </ThemeProvider>
  );
}
