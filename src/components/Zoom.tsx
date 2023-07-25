import { useEditorContext } from '@/context/EditorContext';
import { ActionIcon, Group, Paper, Text, Tooltip } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { IconZoomIn, IconZoomOut } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export default function Zoom() {
  const [currentZoom, setCurrentZoom] = useState(100);
  const { editor } = useEditorContext();

  useHotkeys([
    ['ctrl+=', () => handleZoomIn()],
    ['ctrl+-', () => handleZoomOut()],
  ]);

  useEffect(() => {
    const canvas = editor?.canvas;
    if (canvas) {
      canvas.on('mouse:wheel', () => {
        handleUpdateZoom();
      });
    }
    handleUpdateZoom();
  }, [editor]);

  const handleZoomIn = () => {
    editor?.zoomIn();
    handleUpdateZoom();
  };

  const handleZoomOut = () => {
    editor?.zoomOut();
    handleUpdateZoom();
  };

  const handleUpdateZoom = () => {
    if (editor) {
      const zoom = editor.canvas.getZoom();
      setCurrentZoom(zoom * 100);
    }
  };

  return (
    <Group spacing="xs">
      <Tooltip label="Zoom Out (Ctrl + =)" fz="xs" position="bottom" withArrow>
        <ActionIcon onClick={handleZoomOut} variant="light">
          <IconZoomOut size="1.25rem" />
        </ActionIcon>
      </Tooltip>

      <Paper withBorder p="4px" w="60px" style={{ cursor: 'pointer' }}>
        <Text size="xs" weight="bold" align="center">
          {currentZoom.toFixed()}%
        </Text>
      </Paper>

      <Tooltip label="Zoom In (Ctrl + -)" fz="xs" position="bottom" withArrow>
        <ActionIcon onClick={handleZoomIn} variant="light">
          <IconZoomIn size="1.25rem" />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
