import { useEditorContext } from '@/context/EditorContext';
import {
  ActionIcon,
  Button,
  Group,
  Popover,
  Stack,
  Text,
  Tooltip,
} from '@mantine/core';
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

  const handleLayer = (action: string) => {
    if (tool) {
      tool.order(action);
    }
  };

  return (
    <Group>
      <Tooltip label="Delete" position="bottom" withArrow>
        <ActionIcon variant={'light'} onClick={() => tool?.delete()}>
          <IconTrash size="1.25rem" />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Duplicate" position="bottom" withArrow>
        <ActionIcon variant={'light'} onClick={() => tool?.duplicate()}>
          <IconCopy size="1.25rem" />
        </ActionIcon>
      </Tooltip>
      <Popover withArrow>
        <Popover.Target>
          <Button
            styles={{
              inner: {
                width: '100%',
                justifyContent: 'space-between',
              },
            }}
            py={8}
            style={{ cursor: 'pointer' }}
            px={10}
            w={136}
            c="#999"
            variant="default"
            rightIcon={<IconChevronRight size="1rem" />}
          >
            <Text size="sm">Options</Text>
          </Button>
        </Popover.Target>

        <Popover.Dropdown>
          <Stack>
            <Group>
              <Tooltip label="Brign forward" position="bottom" withArrow>
                <ActionIcon
                  variant={'light'}
                  onClick={() => handleLayer('front')}
                >
                  <IconChevronsUp size="1.25rem" />
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Send backwards" position="bottom" withArrow>
                <ActionIcon
                  variant={'light'}
                  onClick={() => handleLayer('back')}
                >
                  <IconChevronsDown size="1.25rem" />
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Bring to front" position="bottom" withArrow>
                <ActionIcon
                  variant={'light'}
                  onClick={() => handleLayer('forward')}
                >
                  <IconChevronUp size="1.25rem" />
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Send to back" position="bottom" withArrow>
                <ActionIcon
                  variant={'light'}
                  onClick={() => handleLayer('backward')}
                >
                  <IconChevronDown size="1.25rem" />
                </ActionIcon>
              </Tooltip>
            </Group>
            <Group>
              <Tooltip label="Flip horizontal" position="bottom" withArrow>
                <ActionIcon variant={'light'} onClick={() => tool?.flipX()}>
                  <IconFlipHorizontal size="1.25rem" />
                </ActionIcon>
              </Tooltip>
              <Tooltip label="Flip vertical" position="bottom" withArrow>
                <ActionIcon variant={'light'} onClick={() => tool?.flipY()}>
                  <IconFlipVertical size="1.25rem" />
                </ActionIcon>
              </Tooltip>
            </Group>
          </Stack>
        </Popover.Dropdown>
      </Popover>
    </Group>
  );
}
