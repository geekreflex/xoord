import { useAppStore } from '@/store/appStore';
import {
  Divider,
  Flex,
  Modal,
  ScrollArea,
  Stack,
  Switch,
  Text,
  useMantineTheme,
} from '@mantine/core';

export default function Settings() {
  const { settingsModal, closeSettingsModal } = useAppStore((state) => state);
  const theme = useMantineTheme();

  return (
    <Modal
      withCloseButton={false}
      size={500}
      zIndex={9999}
      padding={0}
      opened={settingsModal}
      onClose={closeSettingsModal}
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
      <ScrollArea>
        <Modal.Header p={20}>
          <Text>Settings</Text>
          <Modal.CloseButton />
        </Modal.Header>
        <Divider mb={20} />
        <Modal.Body p={20}>
          <Stack py={10}>
            <Flex justify="space-between" align="center">
              <Text>Draggable Panel</Text>
              <Switch />
            </Flex>
          </Stack>
        </Modal.Body>
      </ScrollArea>
    </Modal>
  );
}
