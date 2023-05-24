import { useState } from 'react';
import { EditorWorkspace } from './EditorWorkspace';

export default function SetSize({
  editorWorkspace,
}: {
  editorWorkspace: EditorWorkspace;
}) {
  const [width, setWidth] = useState<number>(editorWorkspace.option.width);
  const [height, setHeight] = useState<number>(editorWorkspace.option.height);

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(Number(e.target.value));
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(e.target.value));
  };

  const handleUpdateSize = () => {
    editorWorkspace.setSize(width, height);
  };

  return (
    <div>
      <label htmlFor="width-input">Width:</label>
      <input
        id="width-input"
        type="number"
        value={width}
        onChange={handleWidthChange}
      />
      <label htmlFor="height-input">Height:</label>
      <input
        id="width-height"
        type="number"
        value={height}
        onChange={handleHeightChange}
      />

      <br />
      <button onClick={handleUpdateSize}>Update Size</button>
    </div>
  );
}
