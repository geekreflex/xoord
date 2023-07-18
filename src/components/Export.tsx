import { useEditorContext } from '@/context/EditorContext';
import {
  Box,
  Button,
  Collapse,
  Radio,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronRight } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export default function Export() {
  const [opened, { toggle }] = useDisclosure(false);
  const [name, setName] = useState('');
  const [format, setFormat] = useState<string>('png');
  const { editor } = useEditorContext();

  useEffect(() => {
    if (editor) {
      const obj = editor.canvas.getActiveObject();
      setName(obj?.name as string);
    }
  }, []);

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
      link.download = name || activeObject?.name!; // Set the desired file name
      link.click();
    }
  };

  return (
    <Box>
      <Button
        rightIcon={<IconChevronRight size="1rem" />}
        onClick={toggle}
        variant="default"
        px={10}
        styles={{
          inner: {
            justifyContent: 'space-between',
          },
        }}
        fullWidth
      >
        <Text size="xs">Export Selection</Text>
      </Button>

      <Collapse
        mt={10}
        in={opened}
        transitionDuration={200}
        transitionTimingFunction="linear"
      >
        <Stack spacing={10}>
          <TextInput
            placeholder="Enter name.."
            label=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Radio.Group
            name="exportTypeSelection"
            label="Format"
            value={format}
            onChange={setFormat}
          >
            <Stack mt="xs" dir="column">
              <Radio value="png" size="xs" fw="bold" label="PNG" />
              <Radio value="svg" size="xs" fw="bold" label="SVG" />
              <Radio value="jpeg" size="xs" fw="bold" label="JPEG" />
            </Stack>
          </Radio.Group>
          <Button onClick={handleExport} size="xs" fullWidth>
            Export
          </Button>
        </Stack>
      </Collapse>
    </Box>
  );
}
