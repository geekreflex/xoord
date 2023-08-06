import { useEditorContext } from '@/context/EditorContext';
import {
  ActionIcon,
  Divider,
  Flex,
  Paper,
  Popover,
  Tooltip,
  createStyles,
} from '@mantine/core';
import { IconTexture } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import Color from './Color';

const colors = [
  { color: '#101113', label: '' },
  { color: '#111614', label: '' },
  { color: '#14191b', label: '' },
  { color: '#161412', label: '' },
  { color: '#111618', label: '' },
];

const useStyles = createStyles(() => ({
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

export default function CanvasBgList() {
  const [currentColor, setCurrentColor] = useState('');
  const { classes } = useStyles();
  const { editor } = useEditorContext();

  useEffect(() => {
    if (editor) {
      const color = editor.canvas.backgroundColor;
      setCurrentColor(color as string);
    }
  }, [editor]);

  const handleCanvasBg = (color: string) => {
    if (editor) {
      editor.canvas.setBackgroundColor(color, () => {
        setCurrentColor(color);
        editor.canvas.renderAll();
      });
    }
  };

  return (
    <>
      <Popover offset={15} withArrow transitionProps={{ transition: 'pop' }}>
        <Popover.Target>
          <Tooltip
            label="Canvas background"
            fz="xs"
            position="bottom"
            withArrow
          >
            <ActionIcon variant={true ? 'light' : 'filled'}>
              <IconTexture size="1.25rem" />
            </ActionIcon>
          </Tooltip>
        </Popover.Target>
        <Popover.Dropdown p={10}>
          <Color
            currentColor={currentColor}
            colors={colors}
            onColor={handleCanvasBg}
          />
        </Popover.Dropdown>
      </Popover>
    </>
  );
}
