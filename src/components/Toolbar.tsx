import {
  ActionIcon,
  Center,
  Divider,
  Group,
  Paper,
  Tooltip,
  createStyles,
} from '@mantine/core';
import {
  IconEraser,
  IconHandStop,
  IconLetterT,
  IconPencil,
  IconPhoto,
  IconPointer,
} from '@tabler/icons-react';
import History from './History';
import Zoom from './Zoom';
import { useRef, useState } from 'react';
import { useEditorContext } from '@/context/EditorContext';
import ShapeList from './ShapeLists';
import { useHotkeys } from '@mantine/hooks';
import MenuOption from './MenuOption';

const useStyles = createStyles(() => ({
  wrapper: {
    position: 'absolute',
    zIndex: 9999,
    top: 0,
    margin: 15,
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
    ['H', () => handlePan()],
    ['V', () => handleMove()],
    ['U', () => handleAddImage()],
    ['T', () => tool?.addText()],
    ['ctrl+d', () => tool?.duplicate()],
    ['delete', () => tool?.delete()],
    ['backspace', () => tool?.delete()],
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
        style={{
          boxShadow: `rgba(0, 0, 0, 0.1) 0px 3px 4px 1px`,
        }}
      >
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />

        <MenuOption />
        <Divider orientation="vertical" />
        <Group spacing="sm">
          <Tooltip label="Move tool (V)" fz="xs" position="bottom" withArrow>
            <ActionIcon
              onClick={handleMove}
              variant={isPan ? 'light' : 'filled'}
            >
              <IconPointer size="1.25rem" />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Pan tool (H)" fz="xs" position="bottom" withArrow>
            <ActionIcon
              onClick={handlePan}
              variant={isPan ? 'filled' : 'light'}
            >
              <IconHandStop size="1.25rem" />
            </ActionIcon>
          </Tooltip>

          <ShapeList />
          <Tooltip label="Text tool" fz="xs" position="bottom" withArrow>
            <ActionIcon onClick={() => tool?.addText()} variant="light">
              <IconLetterT size="1.25rem" />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Upload photo (U)" fz="xs" position="bottom" withArrow>
            <ActionIcon onClick={handleAddImage} variant="light">
              <IconPhoto size="1.25rem" />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Draw tool" fz="xs" position="bottom" withArrow>
            <ActionIcon
              onClick={() => tool?.addText()}
              variant="light"
              disabled
            >
              <IconPencil size="1.25rem" />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Erase tool" fz="xs" position="bottom" withArrow>
            <ActionIcon
              onClick={() => tool?.addText()}
              variant="light"
              disabled
            >
              <IconEraser size="1.25rem" />
            </ActionIcon>
          </Tooltip>
        </Group>
        <Divider orientation="vertical" />
        <History />
        <Divider orientation="vertical" />
        <Zoom />
      </Paper>
    </Center>
  );
}
