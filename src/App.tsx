import Layout from './components/Layout';
import { EditorProvider } from './context/EditorContext';

function App() {
  return (
    <>
      <EditorProvider>
        <Layout />
      </EditorProvider>
    </>
  );
}

export default App;
