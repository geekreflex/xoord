import { useEditorContext } from '@/context/EditorContext';
import {
  ActionIcon,
  Button,
  Divider,
  Group,
  Modal,
  Text,
  Tooltip,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure, useHotkeys } from '@mantine/hooks';
import { IconRefresh } from '@tabler/icons-react';

export default function ResetCanvas() {
  const { editor } = useEditorContext();
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  useHotkeys([['shift+x', () => open()]]);

  const handleResetCanvas = () => {
    if (editor) {
      editor.canvas.clear();
      localStorage.removeItem('editor-state');
      close();
    }
  };

  return (
    <>
      <Tooltip label="Reset (Shift + X)" fz="xs" position="bottom" withArrow>
        <ActionIcon onClick={open} variant={true ? 'light' : 'filled'}>
          <IconRefresh size="1.25rem" />
        </ActionIcon>
      </Tooltip>
      <Modal
        opened={opened}
        onClose={close}
        zIndex={9999}
        size={500}
        overlayProps={{
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
        centered
      >
        <Text>
          You're about to start a new project. Your current project will be
          cleared and all unsaved changes will be lost. Are you sure you would
          like to continue?
        </Text>
        <Divider my={20} />
        <Group position="right">
          <Button variant="default" onClick={close}>
            Cancel
          </Button>
          <Button onClick={handleResetCanvas}>Continue</Button>
        </Group>
      </Modal>
    </>
  );
}
