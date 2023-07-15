import { EditorSetup } from '@/core/EditorSetup';
import { createContext, useCallback, useContext, useState } from 'react';

type EditorContextType = {
  editor: EditorSetup | null;
  setEditor: (editor: EditorSetup) => void;
};

const EditorContext = createContext<EditorContextType>({
  editor: null,
  setEditor: () => {},
});

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [editor, _setEditor] = useState<EditorSetup | null>(null);

  const setEditor = useCallback((editor: EditorSetup | null) => {
    _setEditor(editor);
    if (editor) {
      //
    }
  }, []);

  const contextValue = {
    editor,
    setEditor,
  };

  return (
    <EditorContext.Provider value={contextValue}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => useContext(EditorContext);
