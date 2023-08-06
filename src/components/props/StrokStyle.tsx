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

const styles = [
  { value: '', label: 'Solid' },
  { value: '40 20', label: 'Dashed' },
  { value: '10 20', label: 'Dotted' },
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
        if (style === 'Dashed') {
          activeObject.set('strokeDashArray', [
            activeObject.strokeWidth! * 2,
            activeObject.strokeWidth!,
          ]);
        }

        if (style === 'Dotted') {
          activeObject.set('strokeDashArray', [
            activeObject.strokeWidth!,
            activeObject.strokeWidth!,
          ]);
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
      <Flex gap={8}>
        {styles.map((style) => (
          <Paper
            className={classes.block}
            withBorder
            w={35}
            h={35}
            onClick={() => handleStrokeWidth(style.label)}
          ></Paper>
        ))}
      </Flex>
    </Box>
  );
}
