import { Box, Flex, Paper, Text, createStyles } from '@mantine/core';
import { useState } from 'react';
import { useEditorContext } from '@/context/EditorContext';
import {
  IconH2,
  IconLetterL,
  IconLetterM,
  IconLetterS,
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
}));

const widths = [
  { width: 1, label: '', icon: IconLetterS },
  { width: 3, label: '', icon: IconLetterM },
  { width: 6, label: '', icon: IconLetterL },
  { width: 10, label: '', icon: IconH2 },
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
          >
            <width.icon strokeWidth={3} size="1rem" />
          </Paper>
        ))}
      </Flex>
    </Box>
  );
}
