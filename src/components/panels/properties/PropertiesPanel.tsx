import Panel from '@/components/common/Panel';
import { useAppContext } from '@/context/AppContext';
import { useEditorContext } from '@/context/EditorContext';
import { useEffect } from 'react';

export default function PropertiesPanel() {
  const { closePropertyPanel, openPropertyPanel, propertyPanel } =
    useAppContext();
  const { editor } = useEditorContext();

  const onClosePropertyPanel = () => {
    closePropertyPanel();
    editor?.canvas.discardActiveObject().renderAll();
  };

  useEffect(() => {
    if (editor) {
      editor.canvas.on('selection:created', () => {
        openPropertyPanel('elements');
      });
      editor.canvas.on('selection:cleared', () => {
        closePropertyPanel();
      });
    }
  }, []);

  return (
    <Panel
      visible={propertyPanel ? true : false}
      close={onClosePropertyPanel}
      pos="right"
    >
      <div>Property panel</div>
    </Panel>
  );
}
