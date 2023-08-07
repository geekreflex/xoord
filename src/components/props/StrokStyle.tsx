import { Box, Flex, Paper, Text, createStyles } from '@mantine/core';
import { useState } from 'react';
import { useEditorContext } from '@/context/EditorContext';
import {
  IconCircle,
  IconCircleDashed,
  IconCircleDotted,
} from '@tabler/icons-react';

const useStyle = createStyles(() => ({
  block: {
    width: '28px',
    height: '28px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 8,
  },
  active: {
    outline: '2px solid #33ed90',
    outlineOffset: 2,
  },
}));

const styles = [
  { value: '', label: 'Solid', icon: IconCircle },
  { value: '40 20', label: 'Dashed', icon: IconCircleDashed },
  { value: '10 20', label: 'Dotted', icon: IconCircleDotted },
];

export default function StrokeStyle() {
  const { editor } = useEditorContext();
  const [currentStyle, setCurrentStyle] = useState<string | number[]>(
    styles[2].value
  );
  const { classes } = useStyle();

  const handleStrokeWidth = (style: string) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject) {
        const arr = style ? style.split(' ').map(Number) : [];
        setCurrentStyle(arr);
        activeObject.set({
          strokeDashArray: arr,
          strokeLineCap: 'round',
        });
        editor.canvas.renderAll();
      }
    }
  };

  return (
    <Box>
      <Text fz="xs" fw="bold" mb="sm">
        Stroke style
      </Text>
      <Flex gap={8}>
        {styles.map((style) => (
          <Paper
            className={`${classes.block} ${currentStyle}`}
            withBorder
            w={35}
            h={35}
            onClick={() => handleStrokeWidth(style.value)}
            component="button"
          >
            <style.icon />
          </Paper>
        ))}
      </Flex>
    </Box>
  );
}
