import Stage from './components/Stage';
import { EditorProvider } from './context/EditorContext';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <>
      <ThemeProvider>
        <EditorProvider>
          <Stage />
        </EditorProvider>
      </ThemeProvider>
    </>
  );
}
