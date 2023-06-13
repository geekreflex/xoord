import { useAppDispatch } from '@/app/hooks';
import { fabric } from 'fabric';
import { useEffect } from 'react';
import { styled } from 'styled-components';

export default function Canvas() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fabricCanvas = new fabric.Canvas('canvas', {
      fireRightClick: true,
      stopContextMenu: true,
      controlsAboveOverlay: true,
    });

    const workspaceEl = document.getElementById('workspace');
    const option = { width: 1200, height: 1200 };
  });

  return (
    <Wrap>
      <div id="workspace">
        <canvas id="canvas" />
      </div>
    </Wrap>
  );
}

const Wrap = styled.div``;
