import {
  Divider,
  Modal,
  ScrollArea,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function ExportDesign() {
  const [opened, { close }] = useDisclosure(true);
  const theme = useMantineTheme();
  return (
    <>
      <Modal
        withCloseButton={false}
        zIndex={9999}
        opened={opened}
        onClose={close}
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
