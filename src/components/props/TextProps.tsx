import Fill from '../Fill';
import Stroke from '../Stroke';
import ObjectOptions from '../ObjectOptions';
import TextOptions from '../TextOptions';
import Export from '../Export';

export default function TextProps() {
  return (
    <>
      <Fill />
      <TextOptions />
      <ObjectOptions />
      <Stroke />
      <Export />
    </>
  );
}
