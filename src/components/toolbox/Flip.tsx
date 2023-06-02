import { useEditorContext } from '@/context/EditorContext';

export default function Flip() {
  const { controller } = useEditorContext();
  return (
    <div>
      <button onClick={() => controller?.flipX()}>FlipX</button>
      <button onClick={() => controller?.flipY()}>FlipY</button>
    </div>
  );
}
