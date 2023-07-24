import {
  ActionIcon,
  Divider,
  Flex,
  Modal,
  Stack,
  Switch,
  Text,
  Tooltip,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSettings } from '@tabler/icons-react';

export default function Settings() {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <>
      <Tooltip label="Settings" fz="xs" position="bottom" withArrow>
        <ActionIcon variant={true ? 'light' : 'filled'} onClick={open}>
          <IconSettings size="1.25rem" />
        </ActionIcon>
      </Tooltip>
      <Modal
        size={400}
        zIndex={9999}
        opened={opened}
        onClose={close}
        title="Settings"
        overlayProps={{
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        <Divider />
        <Stack py={10}>
          <Flex justify="space-between" align="center">
            <Text>Draggable Panel</Text>
            <Switch />
          </Flex>
        </Stack>
      </Modal>
    </>
  );
}
