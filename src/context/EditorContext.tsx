import { EditorSetup } from '@/core/EditorSetup';
import { Tool } from '@/core/Tool';
import { fabric } from 'fabric';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

export enum ObjectTypes {
  Circle = 'circle',
  Triangle = 'triangle',
  Rectangle = 'rect',
  Polygon = 'polygon',
  Text = 'textbox',
  Image = 'image',
  Selection = 'selection',
  Background = 'background',
  Line = 'line',
  Group = 'group',
  ActiveSelection = 'activeSelection',
  Unknown = 'unknown',
}

type EditorContextType = {
  editor: EditorSetup | null;
  tool: Tool | null;
  selectedType: ObjectTypes | undefined;
  selectedObject: (fabric.Object & fabric.Textbox) | undefined;
  selectedObjects: (fabric.Object[] & fabric.Textbox[]) | undefined;
  clearSelectedObjects: () => void;
  setEditor: (editor: EditorSetup) => void;
};

const EditorContext = createContext<EditorContextType>({
  editor: null,
  tool: null,
  selectedType: undefined,
  selectedObject: undefined,
  selectedObjects: undefined,
  clearSelectedObjects: () => {},
  setEditor: () => {},
});

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [editor, _setEditor] = useState<EditorSetup | null>(null);
  const [tool, setTool] = useState<Tool | null>(null);
  const [selectedType, setSelectedType] = useState<ObjectTypes | undefined>(
    undefined
  );
  const [selectedObject, setSelectedObject] = useState<
    (fabric.Object & fabric.Textbox) | undefined
  >(undefined);
  const [selectedObjects, setSelectedObjects] = useState<
    (fabric.Object[] & fabric.Textbox[]) | undefined
  >(undefined);

  const setEditor = useCallback((editor: EditorSetup | null) => {
    _setEditor(editor);
    if (editor) {
      setTool(new Tool(editor));
    }
  }, []);

  const clearSelectedObjects = () => {
    setSelectedObjects(undefined);
    editor?.canvas.discardActiveObject();
    editor?.canvas.renderAll();
  };

  const onSelection = (e: fabric.IEvent | any) => {
    if (editor) {
      const { canvas } = editor;

      const { selected } = e;
      const activeObject = canvas.getActiveObject();

      if (!activeObject) {
        setSelectedObjects(undefined);
        clearSelectedObjects();
      }

      setSelectedType(activeObject?.type as ObjectTypes);
      if (!selected) return;

      if (selected.length > 0) {
        setSelectedObjects(selected);
        setSelectedObject(selected[0]);
      } else {
        setSelectedObject(undefined);
        setSelectedObjects(undefined);
        setSelectedType(ObjectTypes.Unknown);
      }
    }
  };

  useEffect(() => {
    if (editor) {
      const { canvas } = editor;
      canvas.on('selection:created', onSelection);
      canvas.on('selection:updated', onSelection);
      canvas.on('selection:modified', onSelection);
      canvas.on('selection:cleared', () => {
        setSelectedObjects(undefined);
        setSelectedObject(undefined);
        setSelectedType(undefined);
      });

      return () => {
        canvas.off('selection:created', onSelection);
        canvas.off('selection:updated', onSelection);
        canvas.off('selection:modified', onSelection);
      };
    }
  }, [editor]);

  const contextValue = {
    editor,
    tool,
    selectedType,
    selectedObject,
    selectedObjects,
    clearSelectedObjects,
    setEditor,
  };

  return (
    <EditorContext.Provider value={contextValue}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => useContext(EditorContext);
