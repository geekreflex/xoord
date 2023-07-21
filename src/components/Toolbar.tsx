import {
  ActionIcon,
  Center,
  Divider,
  Group,
  Menu,
  Paper,
  Tooltip,
  createStyles,
} from '@mantine/core';
import {
  IconBrandGithub,
  IconCircleSquare,
  IconHandStop,
  IconLetterT,
  IconPhoto,
  IconPointer,
} from '@tabler/icons-react';
import History from './History';
import Zoom from './Zoom';
import { useRef, useState } from 'react';
import { useEditorContext } from '@/context/EditorContext';
import Download from './Download';
import ShapeList from './ShapeLists';
import { useHotkeys } from '@mantine/hooks';

const useStyles = createStyles(() => ({
  wrapper: {
    position: 'absolute',
    zIndex: 9999,
    top: 0,
    margin: 30,
    display: 'flex',
    gap: 20,
  },
}));

export default function Toolbar() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { editor, tool } = useEditorContext();
  const [isPan, setPan] = useState(false);

  const { classes } = useStyles();

  useHotkeys([
    ['ctrl+p', () => handlePan()],
    ['ctrl+m', () => handleMove()],
    ['ctrl+u', () => handleAddImage()],
  ]);

  const handlePan = () => {
    setPan(true);
    editor?.startPan();
  };

  const handleMove = () => {
    setPan(false);
    editor?.endPan();
  };

  const handleAddImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imgElement = document.createElement('img');
        imgElement.onload = () => {
          const fabricImage = new fabric.Image(imgElement);
          fabricImage.scaleToWidth(editor?.workspaceEl?.offsetWidth! / 5);
          fabricImage.set({ name: 'image' });
          if (editor) {
            editor.canvas.add(fabricImage);
            editor.canvas.centerObject(fabricImage);
            editor.canvas.setActiveObject(fabricImage);
          }
        };
        imgElement.src = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Center>
      <Paper
        className={classes.wrapper}
        shadow="lg"
        p="sm"
        radius="lg"
        withBorder
        style={{
          boxShadow: `rgba(0, 0, 0, 0.5) 0px 3px 6px 1px`,
        }}
      >
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
        <Group spacing="xs">
          <Tooltip
            label="Move tool (Ctrl + M)"
            fz="xs"
            position="bottom"
            withArrow
          >
            <ActionIcon
              onClick={handleMove}
              variant={isPan ? 'light' : 'filled'}
            >
              <IconPointer size="1.25rem" />
            </ActionIcon>
          </Tooltip>
          <Tooltip
            label="Pan tool (Ctrl + P)"
            fz="xs"
            position="bottom"
            withArrow
          >
            <ActionIcon
              onClick={handlePan}
              variant={isPan ? 'filled' : 'light'}
            >
              <IconHandStop size="1.25rem" />
            </ActionIcon>
          </Tooltip>
          <Menu
            width={200}
            offset={14}
            withArrow
            transitionProps={{ transition: 'pop' }}
          >
            <Menu.Target>
              <ActionIcon variant="light">
                <Tooltip
                  label="Shapes tool"
                  fz="xs"
                  position="bottom"
                  withArrow
                >
                  <IconCircleSquare size="1.25rem" />
                </Tooltip>
              </ActionIcon>
            </Menu.Target>
            <ShapeList />
          </Menu>
          <Tooltip label="Text tool" fz="xs" position="bottom" withArrow>
            <ActionIcon onClick={() => tool?.addText()} variant="light">
              <IconLetterT size="1.25rem" />
            </ActionIcon>
          </Tooltip>
          <Tooltip
            label="Upload photo (Ctrl + U)"
            fz="xs"
            position="bottom"
            withArrow
          >
            <ActionIcon onClick={handleAddImage} variant="light">
              <IconPhoto size="1.25rem" />
            </ActionIcon>
          </Tooltip>
        </Group>
        <Divider orientation="vertical" />
        <History />
        <Divider orientation="vertical" />
        <Zoom />
        <Divider orientation="vertical" />
        <Download />
        <a href="https://github.com/geekreflex/xoord">
          <ActionIcon variant="light">
            <IconBrandGithub size="1.25rem" />
          </ActionIcon>
        </a>
      </Paper>
    </Center>
  );
}
