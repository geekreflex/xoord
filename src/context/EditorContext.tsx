import { createContext, useCallback, useContext, useState } from 'react';
import { Editor, Tools } from '@/core';

type EditorContextType = {
  editor: Editor | null;
  tools: Tools | null;
  setEditor: (editor: Editor | null) => void;
};

const EditorContext = createContext<EditorContextType>({
  editor: null,
  tools: null,
  setEditor: () => {},
});

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [editor, _setEditor] = useState<Editor | null>(null);
  const [tools, setTools] = useState<Tools | null>(null);

  const onSetEditor = useCallback((editor: Editor | null) => {
    _setEditor(editor);
    if (editor) {
      const tools = new Tools(editor);
      setTools(tools);
    }
  }, []);

  const contextValues = {
    editor,
    tools,
    setEditor: onSetEditor,
  };

  return (
    <EditorContext.Provider value={contextValues}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => useContext(EditorContext);
