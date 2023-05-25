import Canvas from '@/components/Canvas';
import { EditorProvider } from './context/Editor';
import Tool from './components/Tool';

export default function App() {
  return (
    <>
      <EditorProvider>
        <Tool />
        <Canvas />
      </EditorProvider>
    </>
  );
}
