import { ActionIcon, Paper, Tooltip, createStyles } from '@mantine/core';
import { IconTexture } from '@tabler/icons-react';
import Settings from './Settings';
import ResetCanvas from './ResetCanvas';
import Help from './Help';

const useStyles = createStyles(() => ({
  wrapper: {
    position: 'absolute',
    zIndex: 9999,
    bottom: 0,
    margin: 30,
    display: 'flex',
    gap: 20,
    right: 30,
  },
}));

export default function Bottom() {
  const { classes } = useStyles();
  return (
    <Paper
      className={classes.wrapper}
      shadow="lg"
      p="sm"
      radius="lg"
      withBorder
      style={{
        boxShadow: `rgba(0, 0, 0, 0.3) 0px 3px 4px 1px`,
      }}
    >
      <Settings />
      <ResetCanvas />
      <Tooltip label="Canvas Color" fz="xs" position="bottom" withArrow>
        <ActionIcon variant={true ? 'light' : 'filled'}>
          <IconTexture size="1.25rem" />
        </ActionIcon>
      </Tooltip>
      <Help />
    </Paper>
  );
}
