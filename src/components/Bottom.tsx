import { ActionIcon, Paper, Tooltip, createStyles } from '@mantine/core';
import CanvasBgList from './CanvasBgList';
import { IconHelp } from '@tabler/icons-react';
import { useAppStore } from '@/store/appStore';

const useStyles = createStyles(() => ({
  wrapper: {
    position: 'absolute',
    zIndex: 9999,
    bottom: 0,
    margin: 15,
    display: 'flex',
    gap: 20,
    right: 0,
  },
}));

export default function Bottom() {
  const { openHelpModal } = useAppStore((state) => state);
  const { classes } = useStyles();
  return (
    <Paper
      className={classes.wrapper}
      shadow="lg"
      p="sm"
      radius="lg"
      style={{
        boxShadow: `rgba(0, 0, 0, 0.1) 0px 3px 4px 1px`,
      }}
    >
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
