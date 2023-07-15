import { ActionIcon, Flex, Group, Paper, Text, Tooltip } from '@mantine/core';
import { IconChevronRight, IconCopy, IconTrash } from '@tabler/icons-react';

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
      <Paper withBorder py={8} style={{ cursor: 'pointer' }} px={10} w={136}>
        <Flex justify="space-between" align="center">
          <Text size="sm">Options</Text>
          <IconChevronRight size="1rem" />
        </Flex>
      </Paper>
    </Group>
  );
}
