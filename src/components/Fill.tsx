import { useEditorContext } from '@/context/EditorContext';
import { Box, ColorInput, Group, Text } from '@mantine/core';
import { useEffect, useState } from 'react';

export default function Fill() {
  const { editor } = useEditorContext();
  const [color, setColor] = useState('');
  const { selectedObject } = useEditorContext();

  useEffect(() => {
    setColor(selectedObject?.fill as string);
  }, [selectedObject]);

  const handleChange = (color: string) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      setColor(color);
      if (activeObject) {
        activeObject.set({ fill: color || selectedObject?.fill });
      }
      editor.canvas.renderAll();
    }
  };

  return (
    <Box>
      <Group noWrap>
        <Text size="xs" fw="bold">
          Color
        </Text>
        <ColorInput
          format="hexa"
          value={color}
          onChange={handleChange}
          placeholder="Add color..."
        />
      </Group>
    </Box>
  );
}
