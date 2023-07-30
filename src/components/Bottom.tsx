import { ActionIcon, Paper, Tooltip, createStyles } from '@mantine/core';
import ResetCanvas from './ResetCanvas';
import CanvasBgList from './CanvasBgList';
import { IconHelp, IconSettings } from '@tabler/icons-react';
import { useAppStore } from '@/store/appStore';

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
  const { openHelpModal, openSettingsModal } = useAppStore((state) => state);
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
      <Tooltip label="Settings" fz="xs" position="bottom" withArrow>
        <ActionIcon
          variant={true ? 'light' : 'filled'}
          onClick={openSettingsModal}
        >
          <IconSettings size="1.25rem" />
        </ActionIcon>
      </Tooltip>
      <ResetCanvas />
      <CanvasBgList />
      <Tooltip
        label="Help"
        fz="xs"
        onClick={openHelpModal}
        position="bottom"
        withArrow
      >
        <ActionIcon variant={true ? 'light' : 'filled'}>
          <IconHelp size="1.25rem" />
        </ActionIcon>
      </Tooltip>
    </Paper>
  );
}
