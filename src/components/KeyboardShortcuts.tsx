import {
  ActionIcon,
  Box,
  Center,
  Drawer,
  SegmentedControl,
  Tooltip,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconKeyboard } from '@tabler/icons-react';
import { useState } from 'react';

export default function KeyboardShotcuts() {
  const [opened, { open, close }] = useDisclosure(true);
  const [section, setSection] = useState('tool');

  const groupList = [
    { label: 'Tools', value: 'tool' },
    { label: 'View', value: 'view' },
    { label: 'Text', value: 'text' },
    { label: 'Zoom', value: 'zoom' },
    { label: 'Shape', value: 'shape' },
    { label: 'Selection', value: 'selection' },
    { label: 'Arrange', value: 'arrange' },
    { label: 'Edit', value: 'edit' },
  ];

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
        zIndex={9999}
        opened={opened}
        onClose={close}
        position="bottom"
        size={250}
        withOverlay={false}
        withCloseButton={false}
        left={0}
        shadow="lg"
        styles={(theme) => ({
          content: {},
          body: {
            padding: 10,
            height: '100%',
            background: theme.colors.dark[6],
            borderTop: `1px solid ${theme.colors.gray[8]}`,
          },
        })}
      >
        <Center>
          <SegmentedControl data={groupList} w={600} onChange={setSection} />
        </Center>
        <Box mx="auto" w={900}>
          <section>{section}</section>
        </Box>
      </Drawer>
    </>
  );
}
