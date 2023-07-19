import Fill from '../Fill';
import Stroke from '../Stroke';
import ObjectOptions from '../ObjectOptions';
import { useEditorContext } from '@/context/EditorContext';
import Export from '../Export';

export default function ShapeProps() {
  const { selectedType } = useEditorContext();
  return (
    <>
      <ObjectOptions />
      {selectedType !== 'line' && <Fill />}
      <Stroke />
      <Export />
    </>
  );
}
