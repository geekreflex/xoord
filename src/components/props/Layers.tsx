import { Box, Text } from '@mantine/core';
import Block from '../Block';
import {
  IconChevronDown,
  IconChevronUp,
  IconChevronsDown,
  IconChevronsUp,
} from '@tabler/icons-react';
import { useEditorContext } from '@/context/EditorContext';

const layers = [
  { label: 'Bring to front', value: 'front', icon: IconChevronsUp },
  { label: 'Brint forward', value: 'forward', icon: IconChevronUp },
  { label: 'Send backward', value: 'backward', icon: IconChevronDown },
  { label: 'Send to Back', value: 'back', icon: IconChevronsDown },
];

export default function Layers() {
  const { tool } = useEditorContext();

  const handleLayer = (action: string) => {
    if (tool) {
      tool.order(action);
    }
  };

  return (
    <Box>
      <Text fz="xs" fw="bold" mb="sm">
        Layer
      </Text>
      <Block items={layers} onChange={handleLayer} />
    </Box>
  );
}
