import { createContext, useCallback, useContext, useState } from 'react';
import { Editor, Shapes } from '@/core';

type EditorContextType = {
  editor: Editor | null;
  shapes: Shapes | null;
  setEditor: (editor: Editor | null) => void;
};

const EditorContext = createContext<EditorContextType>({
  editor: null,
  shapes: null,
  setEditor: () => {},
});

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [editor, _setEditor] = useState<Editor | null>(null);
  const [shapes, setShapes] = useState<Shapes | null>(null);

  const onSetEditor = useCallback((editor: Editor | null) => {
    _setEditor(editor);
    if (editor) {
      const shapes = new Shapes(editor);
      setShapes(shapes);
    }
  }, []);

  const contextValues = {
    editor,
    shapes,
    setEditor: onSetEditor,
  };

  return (
    <EditorContext.Provider value={contextValues}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => useContext(EditorContext);
