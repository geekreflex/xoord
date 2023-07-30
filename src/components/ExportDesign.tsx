import { Modal, Text, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function ExportDesign() {
  const [opened, { close }] = useDisclosure(false);
  const theme = useMantineTheme();
  return (
    <>
      <Modal
        zIndex={9999}
        opened={opened}
        onClose={close}
        size={600}
        title="Export Design"
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
        <Text>Export Design Modal</Text>
      </Modal>
    </>
  );
}
