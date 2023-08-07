import { useEditorContext } from '@/context/EditorContext';
import { Box, Flex, Text } from '@mantine/core';
import { IconCopy, IconTrash } from '@tabler/icons-react';
import Block from '../Block';

const actions = [
  { value: 'delete', label: 'Delete', icon: IconTrash },
  { value: 'duplicate', label: 'Duplicate', icon: IconCopy },
];

export default function Actions() {
  const { tool } = useEditorContext();

  const handleAction = (action: string) => {
    if (action === 'delete') {
      tool?.delete();
    }

    if (action === 'duplicate') {
      tool?.duplicate();
    }
  };
  return (
    <Box>
      <Text fz="xs" fw="bold" mb="sm">
        Actions
      </Text>
      <Flex gap={15}>
        <Block items={actions} onChange={handleAction} />
      </Flex>
    </Box>
  );
}
