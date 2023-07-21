import { ActionIcon, Paper, Tooltip, createStyles } from '@mantine/core';
import { IconHistory, IconKeyboard, IconSettings } from '@tabler/icons-react';

const useStyles = createStyles(() => ({
  wrapper: {
    position: 'absolute',
    zIndex: 9999,
    bottom: 0,
    margin: 30,
    display: 'flex',
    gap: 20,
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
        boxShadow: `rgba(0, 0, 0, 0.5) 0px 3px 6px 1px`,
      }}
    >
      <Tooltip label="Settings" fz="xs" position="bottom" withArrow>
        <ActionIcon variant={true ? 'light' : 'filled'}>
          <IconSettings size="1.25rem" />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Clear history" fz="xs" position="bottom" withArrow>
        <ActionIcon variant={true ? 'light' : 'filled'}>
          <IconHistory size="1.25rem" />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Hot keys" fz="xs" position="bottom" withArrow>
        <ActionIcon variant={true ? 'light' : 'filled'}>
          <IconKeyboard size="1.25rem" />
        </ActionIcon>
      </Tooltip>
    </Paper>
  );
}
