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

const colors = [
  { color: '#817289', label: '' },
  { color: '#817289', label: '' },
  { color: '#817289', label: '' },
  { color: '#817289', label: '' },
  { color: '#817289', label: '' },
];

const useStyles = createStyles(() => ({
  block: {
    width: '30px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
}));

export default function CanvasBgList() {
  const { classes } = useStyles();
  return (
    <>
      <Popover offset={15} withArrow>
        <Popover.Target>
          <Tooltip label="Canvas Color" fz="xs" position="bottom" withArrow>
            <ActionIcon variant={true ? 'light' : 'filled'}>
              <IconTexture size="1.25rem" />
            </ActionIcon>
          </Tooltip>
        </Popover.Target>
        <Popover.Dropdown p={10}>
          <Flex justify="center">
            <Flex gap={5}>
              {colors.map((color) => (
                <Paper className={classes.block} key={color.color} withBorder />
              ))}
            </Flex>
            <Divider orientation="vertical" mx={5} />
            <Paper className={classes.block} bg="red" withBorder />
          </Flex>
        </Popover.Dropdown>
      </Popover>
    </>
  );
}
