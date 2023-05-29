import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Editor, Element } from '@/core';
import { fabric } from 'fabric';
import { GridLine } from '@/core/guidlines';

type EditorContextType = {
  activeObject: fabric.Object | undefined;
  selectedObjects: fabric.Object[] | undefined;
  editor: Editor | null;
  gridLine: GridLine | null;
  elementTool: Element | null;
  setEditor: (editor: Editor | null) => void;
};

const EditorContext = createContext<EditorContextType>({
  activeObject: undefined,
  selectedObjects: undefined,
  editor: null,
  gridLine: null,
  elementTool: null,
  setEditor: () => {},
});

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [editor, _setEditor] = useState<Editor | null>(null);
  const [gridLine, setGridLine] = useState<GridLine | null>(null);
  const [elementTool, setElementTool] = useState<Element | null>(null);
  const [activeObject, setActiveObject] = useState<fabric.Object | undefined>(
    undefined
  );
  const [selectedObjects, setSelectedObjects] = useState<
    fabric.Object[] | undefined
  >(undefined);

  const onSetEditor = useCallback((editor: Editor | null) => {
    _setEditor(editor);
    if (editor) {
      setElementTool(new Element(editor));
      setGridLine(new GridLine(editor));
    }
  }, []);

  useEffect(() => {
    if (editor) {
      editor.canvas.on('selection:created', (e) => {
        const { selected } = e;
        setSelectedObjects(selected);
        setActiveObject(
          selected && selected.length > 0 ? selected[0] : undefined
        );
      });

      editor.canvas.on('selection:cleared', () => {
        setSelectedObjects(undefined);
        setActiveObject(undefined);
      });
    }
  }, [editor]);

  const contextValues = {
    activeObject,
    selectedObjects,
    editor,
    gridLine,
    elementTool,
    setEditor: onSetEditor,
  };

  return (
    <EditorContext.Provider value={contextValues}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => useContext(EditorContext);
