import { useEditorContext } from '@/context/EditorContext';
import { NumberInput, rem } from '@mantine/core';
import { useEffect, useState } from 'react';

export default function FontSize() {
  const { editor, selectedObject, tool } = useEditorContext();
  const [value, setValue] = useState<number | ''>(0);

  useEffect(() => {
    if (selectedObject) {
      const scaleFactor = selectedObject.scaleX!;
      const fontSize = selectedObject.fontSize!;
      const newSize = (fontSize * scaleFactor).toFixed();
      setValue(parseFloat(newSize));
    }
  }, [selectedObject]);

  useEffect(() => {
    if (editor) {
      editor.canvas.on('object:scaling', (e: fabric.IEvent) => {
        const target = e.target as fabric.Textbox;
        if (target instanceof fabric.Textbox) {
          setValue(target.fontSize as number);
          const scaleFactor = target.scaleX!;
          const originalFontSize = target.fontSize;
          const newFontSize = (originalFontSize! * scaleFactor).toFixed();
          target.set('fontSize', parseFloat(newFontSize));
          target.set('width', scaleFactor * target.width!);
          target.set('scaleX', 1);
          target.set('scaleY', 1);
          target.setCoords();
          target.canvas?.requestRenderAll();
        }
      });
    }
  }, [editor]);

  const handleFontSize = (size: number) => {
    if (tool) {
      tool.fontSize(size);
    }
  };

  return (
    <NumberInput
      value={value}
      onChange={handleFontSize}
      max={200}
      min={7}
      step={1}
      styles={{ input: { width: rem(70), textAlign: 'center' } }}
    />
  );
}
