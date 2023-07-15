import { useEditorContext } from '@/context/EditorContext';
import { Box, ColorInput, Group, Text } from '@mantine/core';
import { useEffect, useState } from 'react';

export default function Fill() {
  const { editor } = useEditorContext();
  const [currentColor, setCurrentColor] = useState('');
  const [color, setColor] = useState('');
  const { selectedObject } = useEditorContext();

  useEffect(() => {
    setCurrentColor(selectedObject?.fill as string);
  }, []);

  useEffect(() => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject) {
        activeObject.set({ fill: color || selectedObject?.fill });
      }
      editor.canvas.renderAll();
    }
  }, [editor, color, selectedObject]);

  return (
    <Box>
      <Group noWrap>
        <Text size="xs" fw="bold">
          Color
        </Text>
        <ColorInput
          format="hexa"
          defaultValue={currentColor as string}
          onChange={setColor}
          placeholder="Add color..."
        />
      </Group>
    </Box>
  );
}
