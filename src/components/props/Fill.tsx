import { Box, Text } from '@mantine/core';
import Color from '../Color';
import { useState } from 'react';
import { useEditorContext } from '@/context/EditorContext';

const colors = [
  { color: '#1e4d56', label: '' },
  { color: '#0d3d1e', label: '' },
  { color: '#283941', label: '' },
  { color: '#744415', label: '' },
  { color: '#412548', label: '' },
];

export default function Fill() {
  const { editor } = useEditorContext();
  const [currentColor, setCurrentColor] = useState(colors[2].color);

  const handleColor = (color: string) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject) {
        setCurrentColor(color);
        activeObject.set({
          fill: color,
        });
        editor.canvas.renderAll();
      }
    }
  };

  return (
    <Box>
      <Text fz="xs" fw="bold" mb="sm">
        Bakcground
      </Text>
      <Color
        currentColor={currentColor}
        colors={colors}
        onColor={handleColor}
      />
    </Box>
  );
}
