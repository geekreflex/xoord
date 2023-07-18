import { Stack } from '@mantine/core';
import ObjectOptions from '../ObjectOptions';
import Export from '../Export';

export default function ImageProps() {
  return (
    <Stack spacing={10}>
      <ObjectOptions />
      <Export />
    </Stack>
  );
}
