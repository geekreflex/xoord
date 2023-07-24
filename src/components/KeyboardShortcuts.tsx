import { ActionIcon, Drawer, Tooltip, createStyles } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconKeyboard } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  drawer: {
    backgroundColor: theme.colors.dark[3],
  },
}));

export default function KeyboardShotcuts() {
  const [opened, { open, close }] = useDisclosure(false);

  const { classes } = useStyles();

  return (
    <>
      <Tooltip
        label="Keyboard Shortcuts (Ctrl + Shift + ?)"
        fz="xs"
        position="bottom"
        withArrow
      >
        <ActionIcon variant={true ? 'light' : 'filled'} onClick={open}>
          <IconKeyboard size="1.25rem" />
        </ActionIcon>
      </Tooltip>
      <Drawer
        className={classes.drawer}
        zIndex={9999}
        opened={opened}
        onClose={close}
        position="bottom"
        size={200}
        withOverlay={false}
        // overlayProps={{ opacity: 0.5, blur: 4 }}
      ></Drawer>
    </>
  );
}
