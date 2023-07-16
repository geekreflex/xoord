import { Stack } from '@mantine/core';
import Fill from '../Fill';
import Stroke from '../Stroke';
import ObjectOptions from '../ObjectOptions';
import TextOptions from '../TextOptions';

export default function TextProps() {
  return (
    <Stack spacing={10}>
      <Fill />
      {/* <Stroke /> */}
      <TextOptions />
      <ObjectOptions />
    </Stack>
  );
}
