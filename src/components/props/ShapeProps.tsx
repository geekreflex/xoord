import { Stack } from '@mantine/core';
import Fill from '../Fill';
import Stroke from '../Stroke';
import ObjectOptions from '../ObjectOptions';
import { useEditorContext } from '@/context/EditorContext';
import Export from '../Export';

export default function ShapeProps() {
  const { selectedType } = useEditorContext();
  return (
    <Stack spacing={10}>
      <ObjectOptions />
      {selectedType !== 'line' && <Fill />}
      <Stroke />
      <Export />
    </Stack>
  );
}
