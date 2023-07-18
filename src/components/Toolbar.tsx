import {
  ActionIcon,
  Divider,
  Group,
  Menu,
  Paper,
  Tooltip,
  createStyles,
} from '@mantine/core';
import {
  IconBrandGithub,
  IconCircle,
  IconCircleSquare,
  IconHandStop,
  IconLetterT,
  IconPhoto,
  IconPointer,
  IconPolygon,
  IconRectangle,
  IconSlash,
  IconStar,
  IconTriangle,
} from '@tabler/icons-react';
import History from './History';
import Zoom from './Zoom';
import { useRef, useState } from 'react';
import { useEditorContext } from '@/context/EditorContext';
import Download from './Download';

const useStyles = createStyles(() => ({
  wrapper: {
    position: 'absolute',
    zIndex: 9999,
    margin: 30,
    marginLeft: 100,
    display: 'flex',
    gap: 20,
  },
}));

export default function Toolbar() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { editor, tool } = useEditorContext();
  const [isPan, setPan] = useState(false);

  const { classes } = useStyles();

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

  const handleAddShape = (shape: string) => {
    if (tool) {
      switch (shape) {
        case 'circle':
          tool.addCircle();
          break;
        case 'rectangle':
          tool.addRectangle();
          break;
        case 'triangle':
          tool.addTriangle();
          break;
        case 'line':
          tool.addLine();
          break;
        case 'star':
          tool.addStar();
          break;
        case 'polygon':
          tool.addPolygon();
          break;
        default:
          break;
      }
    }
  };

  return (
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
        <Tooltip label="Move tool" position="bottom" withArrow>
          <ActionIcon onClick={handleMove} variant={isPan ? 'light' : 'filled'}>
            <IconPointer size="1.25rem" />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Pan tool" position="bottom" withArrow>
          <ActionIcon onClick={handlePan} variant={isPan ? 'filled' : 'light'}>
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
            <ActionIcon onClick={() => console.log('clicked')} variant="light">
              <Tooltip label="Shapes tool" position="bottom" withArrow>
                <IconCircleSquare size="1.25rem" />
              </Tooltip>
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              fz="xs"
              p="5px"
              icon={<IconRectangle size="1.25rem" />}
              onClick={() => handleAddShape('rectangle')}
            >
              Rectangle
            </Menu.Item>
            <Menu.Item
              fz="xs"
              p="5px"
              icon={<IconCircle size="1.25rem" />}
              onClick={() => handleAddShape('circle')}
            >
              Circle
            </Menu.Item>
            <Menu.Item
              fz="xs"
              p="5px"
              icon={<IconTriangle size="1.25rem" />}
              onClick={() => handleAddShape('triangle')}
            >
              Triangle
            </Menu.Item>
            <Menu.Item
              fz="xs"
              p="5px"
              icon={<IconSlash size="1.25rem" />}
              onClick={() => handleAddShape('line')}
            >
              Line
            </Menu.Item>
            <Menu.Item
              fz="xs"
              p="5px"
              icon={<IconStar size="1.25rem" />}
              onClick={() => handleAddShape('star')}
            >
              Star
            </Menu.Item>
            <Menu.Item
              fz="xs"
              p="5px"
              icon={<IconPolygon size="1.25rem" />}
              onClick={() => handleAddShape('polygon')}
            >
              Polygon
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <Tooltip label="Text tool" position="bottom" withArrow>
          <ActionIcon onClick={() => tool?.addText()} variant="light">
            <IconLetterT size="1.25rem" />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Upload photo" position="bottom" withArrow>
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
  );
}
