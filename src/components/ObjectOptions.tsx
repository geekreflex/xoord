import {
  ActionIcon,
  Button,
  Group,
  Popover,
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
  IconTrash,
} from '@tabler/icons-react';

export default function ObjectOptions() {
  return (
    <Group>
      <Tooltip label="Delete" position="bottom" withArrow>
        <ActionIcon variant={'light'}>
          <IconTrash size="1.25rem" />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Duplicate" position="bottom" withArrow>
        <ActionIcon variant={'light'}>
          <IconCopy size="1.25rem" />
        </ActionIcon>
      </Tooltip>
      <Popover>
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
          <Group>
            <Tooltip label="Brign forward" position="bottom" withArrow>
              <ActionIcon variant={'light'}>
                <IconChevronsUp size="1.25rem" />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Send backwards" position="bottom" withArrow>
              <ActionIcon variant={'light'}>
                <IconChevronsDown size="1.25rem" />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Bring to front" position="bottom" withArrow>
              <ActionIcon variant={'light'}>
                <IconChevronUp size="1.25rem" />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Send to back" position="bottom" withArrow>
              <ActionIcon variant={'light'}>
                <IconChevronDown size="1.25rem" />
              </ActionIcon>
            </Tooltip>
          </Group>
        </Popover.Dropdown>
      </Popover>
    </Group>
  );
}
