import { useEditorContext } from '@/context/EditorContext';
import { Box, ColorInput, Group, Text } from '@mantine/core';
import { useEffect, useState } from 'react';

export default function Fill() {
  const { editor } = useEditorContext();
  const [currentColor, setCurrentColor] = useState('');
  const { selectedObject } = useEditorContext();

  useEffect(() => {
    setCurrentColor(selectedObject?.fill as string);
  }, [selectedObject]);

  const handleChange = (color: string) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject) {
        setCurrentColor(color);
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
          value={currentColor}
          onChange={handleChange}
          placeholder="Add color..."
        />
      </Group>
    </Box>
  );
}
