import Fill from '../Fill';
import Stroke from '../Stroke';
import ObjectOptions from '../ObjectOptions';
import { useEditorContext } from '@/context/EditorContext';
import Export from '../Export';
import Shadow from '../Shadow';

export default function ShapeProps() {
  const { selectedType } = useEditorContext();
  return (
    <>
      <ObjectOptions />
      {selectedType !== 'line' && <Fill />}
      <Stroke />
      <Shadow />
      <Export />
    </>
  );
}
