import { useEditorContext } from '@/context/EditorContext';
import {
  ActionIcon,
  Button,
  Flex,
  Group,
  Popover,
  Stack,
  Text,
  Tooltip,
} from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import {
  IconChevronDown,
  IconChevronRight,
  IconChevronUp,
  IconChevronsDown,
  IconChevronsUp,
  IconCopy,
  IconFlipHorizontal,
  IconFlipVertical,
  IconTrash,
} from '@tabler/icons-react';

export default function ObjectOptions() {
  const { tool } = useEditorContext();

  useHotkeys([
    ['ctrl+d', () => tool?.duplicate()],
    ['delete', () => tool?.delete()],
    ['backspace', () => tool?.delete()],
  ]);

  const handleLayer = (action: string) => {
    if (tool) {
      tool.order(action);
    }
  };

  return (
    <Flex align="center" gap={10}>
      <Tooltip label="Delete" fz="xs" position="bottom" withArrow>
        <ActionIcon variant={'light'} onClick={() => tool?.delete()}>
          <IconTrash size="1.25rem" />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Duplicate (Ctrl +D)" fz="xs" position="bottom" withArrow>
        <ActionIcon variant={'light'} onClick={() => tool?.duplicate()}>
          <IconCopy size="1.25rem" />
        </ActionIcon>
      </Tooltip>
      <Popover withArrow>
        <Popover.Target>
          <Button
            styles={{
              inner: {
                justifyContent: 'space-between',
              },
            }}
            py={8}
            style={{ cursor: 'pointer', width: '100%' }}
            px={10}
            variant="default"
            rightIcon={<IconChevronRight size="1rem" />}
          >
            <Text size="xs">Options</Text>
          </Button>
        </Popover.Target>

        <Popover.Dropdown>
          <Stack>
            <Group>
              <Tooltip
                label="Bring to front"
                fz="xs"
                position="bottom"
                withArrow
              >
                <ActionIcon
                  variant={'light'}
                  onClick={() => handleLayer('front')}
                >
                  <IconChevronsUp size="1.25rem" />
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Send to back" fz="xs" position="bottom" withArrow>
                <ActionIcon
                  variant={'light'}
                  onClick={() => handleLayer('back')}
                >
                  <IconChevronsDown size="1.25rem" />
                </ActionIcon>
              </Tooltip>
              <Tooltip
                label="Bring forward"
                fz="xs"
                position="bottom"
                withArrow
              >
                <ActionIcon
                  variant={'light'}
                  onClick={() => handleLayer('forward')}
                >
                  <IconChevronUp size="1.25rem" />
                </ActionIcon>
              </Tooltip>
              <Tooltip
                label="Send backward"
                fz="xs"
                position="bottom"
                withArrow
              >
                <ActionIcon
                  variant={'light'}
                  onClick={() => handleLayer('backward')}
                >
                  <IconChevronDown size="1.25rem" />
                </ActionIcon>
              </Tooltip>
            </Group>
            <Group>
              <Tooltip
                label="Flip horizontal"
                fz="xs"
                position="bottom"
                withArrow
              >
                <ActionIcon variant={'light'} onClick={() => tool?.flipX()}>
                  <IconFlipHorizontal size="1.25rem" />
                </ActionIcon>
              </Tooltip>
              <Tooltip
                label="Flip vertical"
                fz="xs"
                position="bottom"
                withArrow
              >
                <ActionIcon variant={'light'} onClick={() => tool?.flipY()}>
                  <IconFlipVertical size="1.25rem" />
                </ActionIcon>
              </Tooltip>
            </Group>
          </Stack>
        </Popover.Dropdown>
      </Popover>
    </Flex>
  );
}
