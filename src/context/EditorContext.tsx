import { Controller } from '@/core/Controller';
import { Editor } from '@/core/Editor';
import { Tool } from '@/core/Tool';
import { ObjectTypes } from '@/types/editor';
import { fabric } from 'fabric';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

type EditorContextType = {
  tool: Tool | null;
  editor: Editor | null;
  setEditor: (editor: Editor | null) => void;
  controller: Controller | null;
  selectedType: ObjectTypes | undefined;
  selectedObjects: fabric.Object[] | undefined;
  clearSelectedObjects: () => void;
};

const EditorContext = createContext<EditorContextType>({
  tool: null,
  editor: null,
  setEditor: () => {},
  controller: null,
  selectedType: undefined,
  selectedObjects: undefined,
  clearSelectedObjects: () => {},
});

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [editor, _setEditor] = useState<Editor | null>(null);
  const [tool, setTool] = useState<Tool | null>(null);
  const [selectedObjects, setSelectedObjects] = useState<
    fabric.Object[] | undefined
  >(undefined);
  const [controller, setController] = useState<Controller | null>(null);
  const [selectedType, setSelectedType] = useState<ObjectTypes | undefined>(
    undefined
  );

  const setEditor = useCallback((editor: Editor | null) => {
    _setEditor(editor);
    if (editor) {
      setTool(new Tool(editor));
      setController(new Controller(editor));
    }
  }, []);

  const clearSelectedObjects = () => {
    setSelectedObjects(undefined);
    editor?.canvas.discardActiveObject();
    editor?.canvas.renderAll();
  };

  useEffect(() => {
    if (editor) {
      const { canvas } = editor;

      const onSelection = (e: fabric.IEvent) => {
        const { selected } = e;

        if (!selected) return;

        if (selected.length > 0) {
          setSelectedObjects(selected);
          setSelectedType(
            selected.length > 1
              ? ObjectTypes.Selection
              : (selected[0].type as ObjectTypes)
          );
        } else {
          setSelectedObjects(undefined);
          setSelectedType(ObjectTypes.Unknown);
        }
      };
      canvas.on('selection:created', onSelection);
      canvas.on('selection:updated', onSelection);
      canvas.on('selection:cleared', () => {
        setSelectedObjects(undefined);
        setSelectedType(undefined);
      });

      return () => {
        canvas.off('selection:created', onSelection);
        canvas.off('selection:updated', onSelection);
        canvas.off('selection:cleared');
      };
    }
  }, [editor]);

  const contextValues = {
    tool,
    editor,
    setEditor,
    controller,
    selectedType,
    selectedObjects,
    clearSelectedObjects,
  };

  return (
    <EditorContext.Provider value={contextValues}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => useContext(EditorContext);
