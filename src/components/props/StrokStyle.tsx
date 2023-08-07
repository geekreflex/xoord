import { Box, Text } from '@mantine/core';
import { useState } from 'react';
import { useEditorContext } from '@/context/EditorContext';
import {
  IconCircle,
  IconCircleDashed,
  IconCircleDotted,
} from '@tabler/icons-react';
import Block from '../Block';

const styles = [
  { value: 'solid', label: 'Solid', icon: IconCircle },
  { value: 'dashed', label: 'Dashed', icon: IconCircleDashed },
  { value: 'dotted', label: 'Dotted', icon: IconCircleDotted },
];

export default function StrokeStyle() {
  const { editor } = useEditorContext();
  const [currentStyle, setCurrentStyle] = useState<string>(styles[2].value);

  const handleStrokeWidth = (style: string) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject) {
        setCurrentStyle(style);
        if (style === 'solid') {
          activeObject.set({
            strokeDashArray: undefined,
          });
        }

        if (style === 'dotted') {
          activeObject.set({
            strokeDashArray: [10, 10],
          });
        }

        if (style === 'dashed') {
          activeObject.set({
            strokeDashArray: [20, 10],
          });
        }

        editor.canvas.renderAll();
      }
    }
  };

  return (
    <Box>
      <Text fz="xs" fw="bold" mb="sm">
        Stroke style
      </Text>
      <Block
        items={styles}
        currentItem={currentStyle}
        onChange={handleStrokeWidth}
      />
    </Box>
  );
}
