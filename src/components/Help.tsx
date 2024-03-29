import { useAppStore } from '@/store/appStore';
import {
  Divider,
  Flex,
  Grid,
  Kbd,
  Modal,
  Paper,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import React from 'react';

interface ItemI {
  label: string;
  keys: string[];
}

export default function Help() {
  const { helpModal, closeHelpModal } = useAppStore((state) => state);

  const theme = useMantineTheme();

  const tools: ItemI[] = [
    { label: 'Move tool', keys: ['V'] },
    { label: 'Hand tool (Panning)', keys: ['H'] },
    { label: 'Text tool', keys: ['T'] },
    { label: 'Circle tool', keys: ['O'] },
    { label: 'Rectangle tool', keys: ['R'] },
    { label: 'Triangle tool', keys: ['Shift', 'T'] },
    { label: 'Line tool', keys: ['L'] },
  ];

  const editor: ItemI[] = [
    { label: 'Delete', keys: ['Delete', 'Backspace'] },
    { label: 'Copy', keys: ['Ctrl', 'C'] },
    { label: 'Paste', keys: ['Ctrl', 'V'] },
    { label: 'Cut', keys: ['Ctrl', 'X'] },
  ];

  const views: ItemI[] = [
    { label: 'Properties Panel', keys: ['Ctrl', 'K'] },
    { label: 'Zoom in', keys: ['Ctrl', '+'] },
    { label: 'Zoom out', keys: ['Ctrl', '-'] },
    { label: 'Reset zoom', keys: ['Ctrl', '0'] },
  ];

  return (
    <Modal
      withCloseButton={false}
      radius="lg"
      padding={0}
      opened={helpModal}
      onClose={closeHelpModal}
      size={900}
      zIndex={9999}
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
      <Modal.Header p={15}>
        <Text fw="500" fz="md">
          Help Center
        </Text>
        <Modal.CloseButton />
      </Modal.Header>
      <Divider mb={15} />
      <Modal.Body p={20}>
        <Grid>
          <KeyItem data={tools} title="Tools" />
          <KeyItem data={editor} title="Editor" />
          <KeyItem data={views} title="Views" />
        </Grid>
      </Modal.Body>
    </Modal>
  );
}

interface KeyItemProps {
  data: ItemI[];
  title: string;
}

export const KeyItem = ({ data, title }: KeyItemProps) => {
  return (
    <Grid.Col span={6}>
      <Title size="h6" ml={20}>
        {title}
      </Title>
      <Paper withBorder p={20} radius={10}>
        <Stack spacing={10}>
          {data.map((item, index) => (
            <Flex key={index} justify="space-between" align="center">
              <Text fz="sm">{item.label} </Text>
              <Flex gap={6}>
                {item.keys.map((key, index) => (
                  <React.Fragment key={index}>
                    <Kbd>{key}</Kbd>
                  </React.Fragment>
                ))}
              </Flex>
            </Flex>
          ))}
        </Stack>
      </Paper>
    </Grid.Col>
  );
};
