import { Box, Text } from '@mantine/core';
import { useState } from 'react';
import { useEditorContext } from '@/context/EditorContext';
import {
  IconH2,
  IconLetterL,
  IconLetterM,
  IconLetterS,
} from '@tabler/icons-react';
import Block from '../Block';

const widths = [
  { value: '1', label: 'Small', icon: IconLetterS },
  { value: '3', label: 'Medium', icon: IconLetterM },
  { value: '6', label: 'Large', icon: IconLetterL },
  { value: '10', label: 'Xtra large', icon: IconH2 },
];

export default function StrokeWidth() {
  const { editor } = useEditorContext();
  const [currentWidth, setCurrentWidth] = useState(widths[2].value);

  const handleStrokeWidth = (value: string) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject) {
        setCurrentWidth(value);
        activeObject.set({
          strokeWidth: parseInt(value),
        });
        activeObject.set({
          strokeDashArray: [parseInt(value), parseInt(value)],
        });
        editor.canvas.renderAll();
      }
    }
  };

  return (
    <Box>
      <Text fz="xs">Stroke width</Text>
      <Block
        currentItem={currentWidth}
        items={widths}
        onChange={handleStrokeWidth}
      />
    </Box>
  );
}
