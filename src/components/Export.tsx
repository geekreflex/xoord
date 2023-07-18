import { useEditorContext } from '@/context/EditorContext';
import {
  ActionIcon,
  Box,
  Button,
  Collapse,
  Flex,
  Select,
  Text,
  Tooltip,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronRight, IconEye } from '@tabler/icons-react';
import { useState } from 'react';

export default function Export() {
  const [opened, { toggle }] = useDisclosure(false);
  const [format, setFormat] = useState<string | null>('png');
  const { editor } = useEditorContext();

  const handleExport = () => {
    if (editor) {
      const canvas = editor?.canvas;
      const activeObject = canvas.getActiveObject();
      const dataUrl = activeObject?.toDataURL({
        format: format as string,
        multiplier: 2,
      });

      // Create a temporary link element to download the PNG
      let link = document.createElement('a');
      link.href = dataUrl as string;
      link.download = activeObject?.name!; // Set the desired file name
      link.click();
    }
  };

  return (
    <Box>
      <Button
        rightIcon={<IconChevronRight size="1rem" />}
        onClick={toggle}
        variant="default"
        c="#999"
        px={10}
        styles={{
          inner: {
            justifyContent: 'space-between',
            fontSize: '14px',
          },
        }}
        fullWidth
      >
        <Text size="sm">Export Selection</Text>
      </Button>

      <Collapse
        mt={10}
        in={opened}
        transitionDuration={200}
        transitionTimingFunction="linear"
      >
        <Flex gap={10} align="center">
          <Select
            data={[
              { value: 'png', label: 'PNG' },
              { value: 'png', label: 'PNG' },
            ]}
            value={format}
            onChange={setFormat}
          />
          <Tooltip label="Preview" position="bottom" withArrow>
            <ActionIcon onClick={() => console.log('clicked')} variant="light">
              <IconEye size="1.25rem" />
            </ActionIcon>
          </Tooltip>
          <Button onClick={handleExport} variant="default" fullWidth>
            Export
          </Button>
        </Flex>
      </Collapse>
    </Box>
  );
}
