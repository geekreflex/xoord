import { createContext, useContext, useState } from 'react';
import { Editor } from '@/components/core/Editor';

type EditorContextType = {
  editor: Editor | null;
  setEditor: (editor: Editor) => void;
};

const EditorContext = createContext<EditorContextType>({
  editor: null,
  setEditor: () => {},
});

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [editor, setEditor] = useState<Editor | null>(null);

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

export const useEditor = () => useContext(EditorContext);
