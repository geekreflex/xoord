import { useEditorContext } from '@/context/EditorContext';
import { Box, ColorInput, Group, Text } from '@mantine/core';
import { useEffect, useState } from 'react';

export default function Fill() {
  const { editor } = useEditorContext();
  const [color, setColor] = useState('');
  const { selectedObject } = useEditorContext();

  useEffect(() => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject) {
        activeObject.set({ fill: color || selectedObject?.fill });
      }
      editor.canvas.renderAll();
    }
  }, [editor, color]);

  return (
    <Box>
      <Group noWrap>
        <Text size="xs" fw="bold">
          Color
        </Text>
        <ColorInput
          format="hexa"
          defaultValue={selectedObject?.fill as string}
          onChange={setColor}
        />
      </Group>
    </Box>
  );
}
