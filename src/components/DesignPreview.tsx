import { useEditorContext } from '@/context/EditorContext';
import { fabric } from 'fabric';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

export default function DesignPreview() {
  const { editor } = useEditorContext();
  const [previewImg, setPreviewImg] = useState('');

  useEffect(() => {
    if (editor) {
      const workspace = editor.canvas
        .getObjects()
        .find((obj) => obj.id === 'workspace');
      const { width, height, top, left } = workspace as fabric.Object;
      const options = {
        name: 'Preview Image',
        format: 'png',
        quality: 1,
        multiplier: 2,
        width,
        height,
        top,
        left,
      };

      editor.canvas.setViewportTransform([1, 0, 0, 1, 0, 0]);
      editor.canvas.renderAll();
      const dataUrl = editor.canvas.toDataURL(options);
      editor.zoomToFit();

      setPreviewImg(dataUrl);
    }
  }, [editor]);

  return (
    <Wrap>
      <div className="preview-img-wrap">
        <img src={previewImg} alt="" />
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  min-height: 300px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.borderColor};

  .preview-img-wrap {
    display: flex;
    img {
      width: 100%;
    }
  }
`;
