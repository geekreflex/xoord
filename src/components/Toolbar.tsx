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
  IconArrowBackUp,
  IconArrowForwardUp,
  IconCircle,
  IconCircleSquare,
  IconHandStop,
  IconLetterT,
  IconPhoto,
  IconPointer,
  IconRectangle,
  IconTriangle,
  IconZoomIn,
  IconZoomOut,
} from '@tabler/icons-react';

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
  const { classes } = useStyles();
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
          <ActionIcon onClick={() => console.log('clicked')} variant="filled">
            <IconPointer size="1.25rem" />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Pan tool" position="bottom" withArrow>
          <ActionIcon onClick={() => console.log('clicked')} variant="light">
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
            <Menu.Item icon={<IconRectangle size="1.25rem" />}>
              Rectangle
            </Menu.Item>
            <Menu.Item icon={<IconCircle size="1.25rem" />}>Circle</Menu.Item>
            <Menu.Item icon={<IconTriangle size="1.25rem" />}>
              Triangle
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
      <Group spacing="xs">
        <Tooltip label="Undo" position="bottom" withArrow>
          <ActionIcon onClick={() => console.log('clicked')} variant="light">
            <IconArrowBackUp size="1.25rem" />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Redo" position="bottom" withArrow>
          <ActionIcon onClick={() => console.log('clicked')} variant="light">
            <IconArrowForwardUp size="1.25rem" />
          </ActionIcon>
        </Tooltip>
      </Group>
      <Divider orientation="vertical" />
      <Group spacing="xs">
        <Tooltip label="Zoom In" position="bottom" withArrow>
          <ActionIcon onClick={() => console.log('clicked')} variant="light">
            <IconZoomIn size="1.25rem" />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Zoom Out" position="bottom" withArrow>
          <ActionIcon onClick={() => console.log('clicked')} variant="light">
            <IconZoomOut size="1.25rem" />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Paper>
  );
}
