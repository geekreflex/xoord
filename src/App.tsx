import Stage from './components/Stage';
import { EditorProvider } from './context/EditorContext';

export default function App() {
  return (
    <>
      <EditorProvider>
        <Stage />
      </EditorProvider>
    </>
  );
}
