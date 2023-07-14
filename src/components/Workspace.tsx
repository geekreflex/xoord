import { Box, createStyles } from '@mantine/core';
import { useEffect } from 'react';
import { fabric } from 'fabric';
import { EditorSetup } from '../core/EditorSetup';

const useStyles = createStyles(() => ({
  box: {
    width: '100%',
    height: '100vh',
    border: '1px solid red',
  },

  canvas: {
    border: '1px solid blue',
  },
}));

export default function Workspace() {
  const { classes } = useStyles();

  useEffect(() => {
    const fabricCanvas = new fabric.Canvas('canvas', {});
    const editor = new EditorSetup(fabricCanvas);

    return () => {
      editor.dispose();
    };
  }, []);

  return (
    <Box className={classes.box}>
      <canvas className={classes.canvas} />
    </Box>
  );
}
