import { useAppDispatch } from '@/app/hooks';
import { Controller } from '@/core/Controller';
import { Editor } from '@/core/Editor';
import { Tool } from '@/core/Tool';
import { switchPropertyPanel } from '@/features/appSlice';
import { clearObject, setObject } from '@/features/editorSlice';
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
  selectedObject: (fabric.Object & fabric.Textbox & fabric.Polygon) | undefined;
  selectedObjects:
    | (fabric.Object[] & fabric.Textbox[] & fabric.Polygon[])
    | undefined;
  clearSelectedObjects: () => void;
};

const EditorContext = createContext<EditorContextType>({
  tool: null,
  editor: null,
  setEditor: () => {},
  controller: null,
  selectedType: undefined,
  selectedObject: undefined,
  selectedObjects: undefined,
  clearSelectedObjects: () => {},
});

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const [editor, _setEditor] = useState<Editor | null>(null);
  const [tool, setTool] = useState<Tool | null>(null);
  const [selectedObject, setSelectedObject] = useState<
    (fabric.Object & fabric.Textbox & fabric.Polygon) | undefined
  >(undefined);
  const [selectedObjects, setSelectedObjects] = useState<
    (fabric.Object[] & fabric.Textbox[] & fabric.Polygon[]) | undefined
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
    dispatch(clearObject());
    dispatch(switchPropertyPanel(null));
    editor?.canvas.discardActiveObject();
    editor?.canvas.renderAll();
  };

  useEffect(() => {
    if (editor) {
      const { canvas } = editor;

      const onSelection = (e: fabric.IEvent | any) => {
        const { selected } = e;

        if (!selected) return;

        if (selected.length > 0) {
          setSelectedObjects(selected);
          setSelectedObject(selected[0]);
          const selectedObject = selected[0];

          dispatch(
            setObject(selectedObject.toJSON(['name', 'id', 'selectable']))
          );
          setSelectedType(
            selected.length > 1
              ? ObjectTypes.Selection
              : (selected[0].type as ObjectTypes)
          );
          dispatch(
            switchPropertyPanel(
              selected.length > 1
                ? ObjectTypes.Selection
                : (selected[0].type as ObjectTypes)
            )
          );
        } else {
          setSelectedObjects(undefined);
          setSelectedObject(undefined);
          setSelectedType(ObjectTypes.Unknown);
          dispatch(switchPropertyPanel(null));
        }
      };
      canvas.on('selection:created', onSelection);
      canvas.on('selection:updated', onSelection);
      canvas.on('selection:modified', onSelection);
      canvas.on('selection:cleared', () => {
        setSelectedObjects(undefined);
        dispatch(clearObject());
        dispatch(switchPropertyPanel(null));
        setSelectedType(undefined);
      });

      return () => {
        canvas.off('selection:created', onSelection);
        canvas.off('selection:updated', onSelection);
        canvas.off('selection:modified', onSelection);
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
    selectedObject,
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
