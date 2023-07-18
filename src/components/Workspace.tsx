import { Box, createStyles } from '@mantine/core';
import { useEffect } from 'react';
import { fabric } from 'fabric';
import { EditorSetup } from '../core/EditorSetup';
import { useEditorContext } from '@/context/EditorContext';

const useStyles = createStyles(() => ({
  box: {
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  },

  canvas: {},
}));

export default function Workspace() {
  const { classes } = useStyles();
  const { setEditor } = useEditorContext();

  useEffect(() => {
    const fabricCanvas = new fabric.Canvas('canvas', {
      fireRightClick: true,
      stopContextMenu: true,
      preserveObjectStacking: true,
      controlsAboveOverlay: true,
    });
    const workspaceEl = document.getElementById('workspace') as HTMLElement;
    const editor = new EditorSetup(fabricCanvas, workspaceEl);
    setEditor(editor);

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
