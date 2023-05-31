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
import { Controller } from '@/core/Controller';
import { ObjectTypes } from '@/types/editor';

type EditorContextType = {
  selectedObject: fabric.Object | undefined;
  selectedObjects: fabric.Object[] | undefined;
  selectedType: ObjectTypes | undefined;
  editor: Editor | null;
  gridLine: GridLine | null;
  elementTool: Element | null;
  controller: Controller | null;
  setEditor: (editor: Editor | null) => void;
  clearSelectedObjects: () => void;
};

const EditorContext = createContext<EditorContextType>({
  selectedObject: undefined,
  selectedObjects: undefined,
  selectedType: undefined,
  editor: null,
  gridLine: null,
  elementTool: null,
  controller: null,
  setEditor: () => {},
  clearSelectedObjects: () => {},
});

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [editor, _setEditor] = useState<Editor | null>(null);
  const [gridLine, setGridLine] = useState<GridLine | null>(null);
  const [elementTool, setElementTool] = useState<Element | null>(null);
  const [controller, setController] = useState<Controller | null>(null);
  const [selectedObjects, setSelectedObjects] = useState<
    fabric.Object[] | undefined
  >(undefined);
  const [selectedObject, setSelectedObject] = useState<
    fabric.Object | undefined
  >(undefined);
  const [selectedType, setSelectedType] = useState<ObjectTypes | undefined>(
    undefined
  );

  const onSetEditor = useCallback((editor: Editor | null) => {
    _setEditor(editor);
    if (editor) {
      setElementTool(new Element(editor));
      setGridLine(new GridLine(editor));
      setController(new Controller(editor));
    }
  }, []);

  const clearSelectedObjects = () => {
    setSelectedObjects(undefined);
    setSelectedObject(undefined);
    editor?.canvas.discardActiveObject();
    editor?.canvas.renderAll();
  };

  useEffect(() => {
    if (editor) {
      const { canvas } = editor;

      const handleSelection = (e: fabric.IEvent) => {
        const { selected } = e;

        if (!selected) return;

        if (selected?.length > 1) {
          setSelectedType(ObjectTypes.Selection);
          setSelectedObjects(selected);
        } else if (selected.length === 1) {
          const firstSelectedObject = selected[0];
          const objectType = firstSelectedObject.type as ObjectTypes;
          setSelectedObject(firstSelectedObject);
          setSelectedType(objectType);
        } else {
          setSelectedType(ObjectTypes.Unknwon);
        }
      };

      canvas.on('selection:created', handleSelection);
      canvas.on('selection:updated', handleSelection);
      canvas.on('selection:cleared', () => {
        setSelectedObject(undefined);
        setSelectedObjects(undefined);
      });

      return () => {
        canvas.off('selection:created', handleSelection);
        canvas.off('selection:updated', handleSelection);
        canvas.off('selection:cleared');
      };
    }
  }, [editor]);

  const contextValues = {
    selectedObjects,
    selectedObject,
    selectedType,
    editor,
    gridLine,
    elementTool,
    controller,
    setEditor: onSetEditor,
    clearSelectedObjects,
  };

  return (
    <EditorContext.Provider value={contextValues}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => useContext(EditorContext);
