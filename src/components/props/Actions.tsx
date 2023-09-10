import { useEditorContext } from '@/context/EditorContext';
import { Box, Divider, Flex, Text } from '@mantine/core';
import {
  IconCopy,
  IconFlipHorizontal,
  IconFlipVertical,
  IconTrash,
} from '@tabler/icons-react';
import Block from '../Block';

const actions = [
  { value: 'delete', label: 'Delete', icon: IconTrash },
  { value: 'duplicate', label: 'Duplicate', icon: IconCopy },
];

const flips = [
  { value: 'flipx', label: 'Flip X', icon: IconFlipHorizontal },
  { value: 'flipy', label: 'Flip Y', icon: IconFlipVertical },
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

    if (action === 'flipx') {
      tool?.flipX();
    }

    if (action === 'flipy') {
      tool?.flipY();
    }
  };
  return (
    <Box>
      <Text fz="xs">Actions</Text>
      <Flex>
        <Flex gap={15}>
          <Block items={actions} onChange={handleAction} />
        </Flex>
        <Divider orientation="vertical" mx={15} />
        <Flex gap={15}>
          <Block items={flips} onChange={handleAction} />
        </Flex>
      </Flex>
    </Box>
  );
}
