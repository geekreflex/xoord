import { useEffect } from 'react';
import Layout from './components/Layout';
import { EditorProvider } from './context/EditorContext';
import WebFont from 'webfontloader';
import { fonts } from './data/fonts';

function App() {
  const fontFamilies = fonts.map((font) => font.value);
  useEffect(() => {
    const loadFonts = () => {
      WebFont.load({
        google: {
          families: fontFamilies,
        },
      });
    };

    loadFonts();
  });
  return (
    <>
      <EditorProvider>
        <Layout />
      </EditorProvider>
    </>
  );
}

export default App;
