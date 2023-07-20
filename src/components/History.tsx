import { useEditorContext } from '@/context/EditorContext';
import { ActionIcon, Group, Tooltip } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { IconArrowBackUp, IconArrowForwardUp } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export default function History() {
  const { editor } = useEditorContext();
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  useHotkeys([
    ['ctrl+z', () => handleUndo()],
    ['ctrl+y', () => handleRedo()],
  ]);

  useEffect(() => {
    if (editor) {
      editor.canvas.on('object:added', checkUndoRedo);
      editor.canvas.on('object:modified', checkUndoRedo);
      editor.canvas.on('object:removed', checkUndoRedo);
      editor.canvas.on('history:clear', checkUndoRedo);
    }
  }, [editor]);

  const checkUndoRedo = () => {
    const undoState = editor?.canvas.historyUndo;
    const redoState = editor?.canvas.historyRedo;
    if (undoState) {
      setCanUndo(undoState.length > 1);
    }

    if (redoState) {
      setCanRedo(redoState.length > 0);
    }
  };

  const handleUndo = () => {
    if (!canUndo) {
      return;
    }
    editor?.canvas.undo();
  };
  const handleRedo = () => {
    if (!canRedo) {
      return;
    }
    editor?.canvas.redo();
  };
  return (
    <Group spacing="xs">
      <Tooltip label="Undo" position="bottom" withArrow>
        <ActionIcon onClick={handleUndo} variant="light" disabled={!canUndo}>
          <IconArrowBackUp size="1.25rem" />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Redo" position="bottom" withArrow>
        <ActionIcon onClick={handleRedo} variant="light" disabled={!canRedo}>
          <IconArrowForwardUp size="1.25rem" />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
