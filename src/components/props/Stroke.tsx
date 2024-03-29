import { Box, Text } from '@mantine/core';
import Color from '../Color';
import { useState } from 'react';
import { useEditorContext } from '@/context/EditorContext';

const colors = [
  { color: '#587cc2', label: '' },
  { color: '#6fddb1', label: '' },
  { color: '#8fcce4', label: '' },
  { color: '#e0a971', label: '' },
  { color: '#94d5ee', label: '' },
];

export default function Stroke() {
  const { editor } = useEditorContext();
  const [currentColor, setCurrentColor] = useState(colors[2].color);

  const handleColor = (color: string) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject) {
        setCurrentColor(color);
        activeObject.set({
          stroke: color,
        });
        editor.canvas.renderAll();
      }
    }
  };

  return (
    <Box>
      <Text fz="xs">Stroke</Text>
      <Color
        currentColor={currentColor}
        colors={colors}
        onColor={handleColor}
      />
    </Box>
  );
}
