import { ActionIcon, Paper, Tooltip, createStyles } from '@mantine/core';
import {
  IconHelp,
  IconHistory,
  IconKeyboard,
  IconScanEye,
  IconSettings,
  IconTexture,
} from '@tabler/icons-react';

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
      <Tooltip label="Hot keys" fz="xs" position="bottom" withArrow>
        <ActionIcon variant={true ? 'light' : 'filled'}>
          <IconKeyboard size="1.25rem" />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Preview (Shift + P)" fz="xs" position="bottom" withArrow>
        <ActionIcon variant={true ? 'light' : 'filled'}>
          <IconScanEye size="1.25rem" />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Help" fz="xs" position="bottom" withArrow>
        <ActionIcon variant={true ? 'light' : 'filled'}>
          <IconTexture size="1.25rem" />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Help" fz="xs" position="bottom" withArrow>
        <ActionIcon variant={true ? 'light' : 'filled'}>
          <IconHelp size="1.25rem" />
        </ActionIcon>
      </Tooltip>
    </Paper>
  );
}
