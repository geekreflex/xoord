import { createContext, useCallback, useContext, useState } from 'react';
import { Editor, Element } from '@/core';

type EditorContextType = {
  editor: Editor | null;
  elementTool: Element | null;
  setEditor: (editor: Editor | null) => void;
};

const EditorContext = createContext<EditorContextType>({
  editor: null,
  elementTool: null,
  setEditor: () => {},
});

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [editor, _setEditor] = useState<Editor | null>(null);
  const [elementTool, setElementTool] = useState<Element | null>(null);

  const onSetEditor = useCallback((editor: Editor | null) => {
    _setEditor(editor);
    if (editor) {
      const element = new Element(editor);
      setElementTool(element);
    }
  }, []);

  const contextValues = {
    editor,
    elementTool,
    setEditor: onSetEditor,
  };

  return (
    <EditorContext.Provider value={contextValues}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => useContext(EditorContext);
