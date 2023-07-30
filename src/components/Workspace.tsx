import { Box, createStyles, useMantineTheme } from '@mantine/core';
import { useEffect } from 'react';
import { fabric } from 'fabric';
import { EditorSetup } from '../core/EditorSetup';
import { useEditorContext } from '@/context/EditorContext';
import { useHotkeys } from '@mantine/hooks';

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
  const { setEditor, tool } = useEditorContext();
  const theme = useMantineTheme();

  useHotkeys([
    ['shift+v', () => tool?.flipY()],
    ['shift+h', () => tool?.flipX()],
    ['ctrl+]', () => tool?.order('forward')],
    ['ctrl+[', () => tool?.order('backward')],
    [']', () => tool?.order('front')],
    ['[', () => tool?.order('back')],
  ]);

  useEffect(() => {
    const fabricCanvas = new fabric.Canvas('canvas', {
      fireRightClick: true,
      stopContextMenu: true,
      preserveObjectStacking: true,
      controlsAboveOverlay: true,
      backgroundColor: theme.colors.dark[9],
    });
    const workspaceEl = document.getElementById('workspace') as HTMLElement;
    const editor = new EditorSetup(fabricCanvas, workspaceEl);
    setEditor(editor);

    console.log(theme.colors.dark[9]);

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
