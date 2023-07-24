import { ActionIcon, Paper, Tooltip, createStyles } from '@mantine/core';
import { IconHelp, IconHistory } from '@tabler/icons-react';
import KeyboardShotcuts from './KeyboardShortcuts';
import Settings from './Settings';

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
      <Tooltip
        label="Clear history (Shift + X)"
        fz="xs"
        position="bottom"
        withArrow
      >
        <ActionIcon variant={true ? 'light' : 'filled'}>
          <IconHistory size="1.25rem" />
        </ActionIcon>
      </Tooltip>
      <KeyboardShotcuts />
      <Tooltip label="Help" fz="xs" position="bottom" withArrow>
        <ActionIcon variant={true ? 'light' : 'filled'}>
          <IconHelp size="1.25rem" />
        </ActionIcon>
      </Tooltip>
    </Paper>
  );
}
