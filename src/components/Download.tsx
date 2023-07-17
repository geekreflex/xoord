import { useEditorContext } from '@/context/EditorContext';
import {
  ActionIcon,
  Button,
  Divider,
  Popover,
  Slider,
  Stack,
  Text,
  TextInput,
  Tooltip,
  rem,
} from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import { useState } from 'react';

export default function Download() {
  const { editor } = useEditorContext();
  const [filename, setFilename] = useState('Design');
  const [quality, setQuality] = useState(80);
  const [type, setType] = useState('png');

  const handleSave = () => {
    if (editor) {
      const { canvas } = editor;
      const image = canvas.toDataURL({
        format: type,
        quality: quality / 100,
      });
      const downloadLink = document.createElement('a');
      downloadLink.href = image;
      downloadLink.download = `${filename}.${type.toLowerCase()}`;
      downloadLink.click();
    }
  };

  return (
    <Popover
      width={300}
      offset={14}
      withArrow
      transitionProps={{ transition: 'pop' }}
    >
      <Popover.Target>
        <Tooltip label="Download" position="bottom" withArrow>
          <ActionIcon variant="light">
            <IconDownload size="1.25rem" />
          </ActionIcon>
        </Tooltip>
      </Popover.Target>
      <Popover.Dropdown>
        <Text fw="bold" pb={5} size="sm">
          Save Design
        </Text>
        <Divider pt={5} />
        <Stack spacing={10}>
          <TextInput
            label="Filename"
            placeholder="Enter name..."
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
          />

          <Button.Group>
            <Button
              fz="xs"
              variant={type == 'jpeg' ? 'filled' : 'default'}
              fullWidth
              onClick={() => setType('jpeg')}
            >
              JPEG
            </Button>
            <Button
              fz="xs"
              variant={type === 'png' ? 'filled' : 'default'}
              fullWidth
              onClick={() => setType('png')}
            >
              PNG
            </Button>
          </Button.Group>
          {type === 'jpeg' && (
            <>
              <Text size="sm">Quality</Text>
              <Slider
                label={quality}
                min={10}
                max={100}
                step={5}
                value={quality}
                onChange={setQuality}
                size={4}
                styles={(theme) => ({
                  thumb: {
                    height: rem(16),
                    width: rem(16),
                    backgroundColor: theme.white,
                    borderWidth: rem(1),
                    boxShadow: theme.shadows.sm,
                  },
                })}
              />{' '}
            </>
          )}
          <Button onClick={handleSave}>Download</Button>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
