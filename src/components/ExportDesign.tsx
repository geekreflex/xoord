import { useAppStore } from '@/store/appStore';
import {
  Divider,
  Modal,
  ScrollArea,
  Text,
  useMantineTheme,
} from '@mantine/core';

export default function ExportDesign() {
  const { exportModal, closeExportModal } = useAppStore((state) => state);
  const theme = useMantineTheme();
  return (
    <>
      <Modal
        withCloseButton={false}
        zIndex={9999}
        opened={exportModal}
        onClose={closeExportModal}
        padding={0}
        size={600}
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
            <Text>Export Design</Text>
            <Modal.CloseButton />
          </Modal.Header>
          <Divider mb={20} />
          <Modal.Body p={20}>
            <Text>Modal Body</Text>
          </Modal.Body>
        </ScrollArea>
      </Modal>
    </>
  );
}
