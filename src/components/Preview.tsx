import { useEditorContext } from '@/context/EditorContext';
import { Center, Paper } from '@mantine/core';
import { useEffect, useRef } from 'react';

export default function Preview() {
  const { editor } = useEditorContext();
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (editor && imgRef.current) {
      const transform = editor.canvas.viewportTransform?.splice(0);
      editor.canvas.viewportTransform = [1, 0, 0, 1, 0, 0];
      const url = editor.canvas.toDataURL();
      imgRef.current.src = url;
      editor.canvas.viewportTransform = transform;
    }
  }, [editor]);

  return (
    <Paper
      withBorder
      radius="lg"
      style={{
        backgroundImage: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==)`,
      }}
    >
      <Center h={400}>
        <img
          ref={imgRef}
          style={{
            width: '95%',
            objectPosition: 'center',
            objectFit: 'contain',
          }}
        />
      </Center>
    </Paper>
  );
}
