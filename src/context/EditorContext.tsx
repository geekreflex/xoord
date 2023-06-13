import { Editor } from '@/core/Editor';
import { createContext, useCallback, useContext, useState } from 'react';

type EditorContextType = {
  editor: Editor | null;
  setEditor: (editor: Editor | null) => void;
};

const EditorContext = createContext<EditorContextType>({
  editor: null,
  setEditor: () => {},
});

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [editor, _setEditor] = useState<Editor | null>(null);

  const setEditor = useCallback((editor: Editor | null) => {
    _setEditor(editor);
    if (editor) {
      // Todo:
    }
  }, []);

  const contextValues = {
    editor,
    setEditor,
  };

  return (
    <EditorContext.Provider value={contextValues}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => useContext(EditorContext);
