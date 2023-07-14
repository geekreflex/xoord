import { Box, createStyles } from '@mantine/core';
import { useEffect } from 'react';
import { fabric } from 'fabric';
import { EditorSetup } from '../core/EditorSetup';

const useStyles = createStyles(() => ({
  box: {
    width: '100%',
    height: '100vh',
  },

  canvas: {},
}));

export default function Workspace() {
  const { classes } = useStyles();

  useEffect(() => {
    const fabricCanvas = new fabric.Canvas('canvas', {});
    const workspaceEl = document.getElementById('workspace') as HTMLElement;
    const editor = new EditorSetup(fabricCanvas, workspaceEl);

    return () => {
      editor.dispose();
    };
  }, []);

  return (
    <Box className={classes.box} id="workspace">
      <canvas className={classes.canvas} id="canvas" />
    </Box>
  );
}
