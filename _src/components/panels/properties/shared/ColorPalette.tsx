import { useState } from 'react';
import { SketchPicker, TwitterPicker } from 'react-color';

export default function ColorPalette() {
  const [blockPickerColor, setBlockPickerColor] = useState('#38d67a');

  return (
    <div>
      <TwitterPicker color={blockPickerColor} />
    </div>
  );
}
