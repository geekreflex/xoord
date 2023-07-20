import { useEditorContext } from '@/context/EditorContext';
import { Paper, Stack, Text } from '@mantine/core';
import { useEffect, useState } from 'react';

interface ContextMenuAction {
  id: string;
  label: string;
  action: () => void;
}

export default function ContextMenu() {
  const { tool, editor } = useEditorContext();
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [selectedObject, setSelectedObject] = useState<fabric.Object | null>(
    null
  );
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });
  const contextMenuActions: ContextMenuAction[] = [
    {
      id: 'delete',
      label: 'Delete',
      action: () => tool?.delete(),
    },
    {
      id: 'duplicate',
      label: 'Duplicate',
      action: () => tool?.duplicate(),
    },
    {
      id: 'copy',
      label: 'Copy',
      action: () => tool?.duplicate(),
    },
    {
      id: 'paste',
      label: 'Paste',
      action: () => tool?.duplicate(),
    },
  ];

  useEffect(() => {
    if (editor) {
      editor.canvas.on('mouse:down', onCanvasMouseDown);
    }
    return () => {
      if (editor) {
        editor.canvas.off('mouse:down', onCanvasMouseDown);
      }
    };
  }, [editor]);

  const onCanvasMouseDown = (event: fabric.IEvent) => {
    setContextMenuVisible(false);
    if (event.e) {
      const mouseEvent = event.e as MouseEvent;
      if (mouseEvent.button === 2) {
        const canvas = editor?.canvas;
        if (canvas) {
          const { clientX, clientY } = mouseEvent;
          const canvasPosition = canvas.getElement().getBoundingClientRect();
          const x = clientX - canvasPosition.left;
          const y = clientY - canvasPosition.top;

          const activeObject = canvas.getActiveObject();
          setSelectedObject(activeObject);
          setContextMenuPosition({ x, y });
          setContextMenuVisible(true);
        }
      }
    }
  };

  const handleContextMenuAction = (action: ContextMenuAction) => {
    if (editor && selectedObject) {
      action.action();
    }
    hideContextMenu();
  };

  const hideContextMenu = () => {
    setContextMenuVisible(!contextMenuVisible);
  };

  return (
    <>
      {contextMenuVisible && (
        <Paper
          pos="absolute"
          left={contextMenuPosition.x}
          top={contextMenuPosition.y}
          shadow="lg"
          withBorder
          p={10}
          w={200}
          style={{
            boxShadow: `rgba(0, 0, 0, 0.5) 0px 3px 6px 1px`,
          }}
        >
          <Stack spacing={8}>
            {contextMenuActions.map((action) => (
              <Text
                key={action.id}
                size="sm"
                fw="normal"
                style={{ cursor: selectedObject ? 'pointer' : 'default' }}
                onClick={() => handleContextMenuAction(action)}
                c={`${selectedObject ? '' : 'dimmed'}`}
              >
                {action.label}
              </Text>
            ))}
          </Stack>
        </Paper>
      )}
    </>
  );
}
