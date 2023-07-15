import { EditorSetup } from '@/core/EditorSetup';
import { Tool } from '@/core/Tool';
import { createContext, useCallback, useContext, useState } from 'react';

type EditorContextType = {
  editor: EditorSetup | null;
  tool: Tool | null;
  setEditor: (editor: EditorSetup) => void;
};

const EditorContext = createContext<EditorContextType>({
  editor: null,
  tool: null,
  setEditor: () => {},
});

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [editor, _setEditor] = useState<EditorSetup | null>(null);
  const [tool, setTool] = useState<Tool | null>(null);

  const setEditor = useCallback((editor: EditorSetup | null) => {
    _setEditor(editor);
    if (editor) {
      setTool(new Tool(editor));
    }
  }, []);

  const contextValue = {
    editor,
    tool,
    setEditor,
  };

  return (
    <EditorContext.Provider value={contextValue}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => useContext(EditorContext);
