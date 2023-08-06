import { Box, Flex, Paper, Text, createStyles } from '@mantine/core';
import { useState } from 'react';
import { useEditorContext } from '@/context/EditorContext';

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
}));

const widths = [
  { width: 1, label: '' },
  { width: 3, label: '' },
  { width: 6, label: '' },
  { width: 10, label: '' },
];

export default function StrokeWidth() {
  const { editor } = useEditorContext();
  const [currentWidth, setCurrentWidth] = useState(widths[2].width);
  const { classes } = useStyle();

  const handleStrokeWidth = (width: number) => {
    if (editor) {
      const activeObject = editor.canvas.getActiveObject();
      if (activeObject) {
        setCurrentWidth(width);
        activeObject.set({
          strokeWidth: width,
        });
        editor.canvas.renderAll();
      }
    }
  };

  return (
    <Box>
      <Text fz="xs" fw="bold" mb="sm">
        Stroke width
      </Text>
      <Flex gap={8}>
        {widths.map((width) => (
          <Paper
            className={classes.block}
            withBorder
            w={35}
            h={35}
            onClick={() => handleStrokeWidth(width.width)}
          ></Paper>
        ))}
      </Flex>
    </Box>
  );
}
