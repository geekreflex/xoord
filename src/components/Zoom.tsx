import { useEditorContext } from '@/context/EditorContext';
import { ActionIcon, Group, Tooltip } from '@mantine/core';
import { IconZoomIn, IconZoomOut } from '@tabler/icons-react';

export default function Zoom() {
  const { editor } = useEditorContext();

  const handleZoomIn = () => {
    editor?.zoomIn();
  };

  const handleZoomOut = () => {
    editor?.zoomOut();
  };

  return (
    <Group spacing="xs">
      <Tooltip label="Zoom Out" position="bottom" withArrow>
        <ActionIcon onClick={handleZoomOut} variant="light">
          <IconZoomOut size="1.25rem" />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Zoom In" position="bottom" withArrow>
        <ActionIcon onClick={handleZoomIn} variant="light">
          <IconZoomIn size="1.25rem" />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
