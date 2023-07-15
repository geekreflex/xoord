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
import { useState } from 'react';
import { useEditorContext } from '@/context/EditorContext';

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

  const handleAddShape = (shape: string) => {
    if (tool) {
      switch (shape) {
        case 'circle':
          tool.addCircle();
          break;
        case 'rectangle':
          tool.addRectangle();
          break;
      }
    }
  };

  return (
    <Paper
      className={classes.wrapper}
      shadow="md"
      p="sm"
      radius="lg"
      withBorder
    >
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
        <Menu width={200} offset={14} withArrow>
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
            <Menu.Item fz="xs" p="5px" icon={<IconTriangle size="1.25rem" />}>
              Triangle
            </Menu.Item>
            <Menu.Item fz="xs" p="5px" icon={<IconSlash size="1.25rem" />}>
              Line
            </Menu.Item>
            <Menu.Item fz="xs" p="5px" icon={<IconStar size="1.25rem" />}>
              Star
            </Menu.Item>
            <Menu.Item fz="xs" p="5px" icon={<IconPolygon size="1.25rem" />}>
              Polygon
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <Tooltip label="Text tool" position="bottom" withArrow>
          <ActionIcon onClick={() => console.log('clicked')} variant="light">
            <IconLetterT size="1.25rem" />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Upload photo" position="bottom" withArrow>
          <ActionIcon onClick={() => console.log('clicked')} variant="light">
            <IconPhoto size="1.25rem" />
          </ActionIcon>
        </Tooltip>
      </Group>
      <Divider orientation="vertical" />
      <History />
      <Divider orientation="vertical" />
      <Zoom />
    </Paper>
  );
}
