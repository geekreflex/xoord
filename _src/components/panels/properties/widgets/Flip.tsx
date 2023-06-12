import { useEditorContext } from '@/context/EditorContext';
import { IPos } from '@/types/app';
import GridItem from '../shared/GridItem';

export default function Flip() {
  const { controller } = useEditorContext();
  const items: IPos[] = [
    {
      name: 'Horizontal',
      icon: 'arrowSwapXIcon',
      func: () => handleFlipX,
      alias: 'flipx',
    },
    {
      name: 'Vertical',
      icon: 'arrowSwapYIcon',
      func: () => handleFlipY,
      alias: 'flipy',
    },
  ];

  const handleFlipX = () => {
    controller?.flipX();
  };

  const handleFlipY = () => {
    controller?.flipY();
  };

  return (
    <div>
      <GridItem items={items} title="Flip" />
    </div>
  );
}
