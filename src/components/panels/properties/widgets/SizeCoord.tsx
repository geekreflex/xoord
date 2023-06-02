import Icon from '@/components/common/Icon';
import { Input } from '@/components/common/Input';
import { useEditorContext } from '@/context/EditorContext';
import { DividerX, Title } from '@/styles/global';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

export default function SizeCoord() {
  const { selectedObjects, editor } = useEditorContext();
  const [dimensions, setDimensions] = useState({
    width: '0',
    height: '0',
    angle: '0',
    x: '0',
    y: '0',
  });

  const handleDimensionChange = (key: string, value: string) => {
    setDimensions((prevDimensions) => ({
      ...prevDimensions,
      [key]: value,
    }));
    if (selectedObjects) {
      const obj = selectedObjects[0];

      if (key === 'width') {
        obj.set({
          [key]: parseFloat(value),
          scaleX: 1,
        });
      } else if (key === 'height') {
        obj.set({
          [key]: parseFloat(value),
          scaleY: 1,
        });
      } else {
        obj.set({
          [key]: parseFloat(value),
        });
      }
    }
    editor?.canvas.renderAll();
  };

  const onObjectScaling = (e: fabric.IEvent) => {
    console.log('here');
    const target = e.target;
    const { width, height, angle, left, top, scaleX, scaleY } = target!;
    setDimensions({
      width: `${(width! * scaleX!).toFixed(2)}`,
      height: `${(height! * scaleY!).toFixed(2)}`,
      angle: angle!.toFixed(2).toString(),
      x: left!.toFixed(2).toString(),
      y: top!.toFixed(2).toString(),
    });
  };

  useEffect(() => {
    if (editor && selectedObjects) {
      const activeObject = selectedObjects[0];
      if (activeObject) {
        const { width, height, angle, left, top, scaleX, scaleY } =
          activeObject;
        setDimensions({
          width: `${(width! * scaleX!).toFixed(2)}`,
          height: `${(height! * scaleY!).toFixed(2)}`,
          angle: angle!.toFixed(2).toString(),
          x: left!.toFixed(2).toString(),
          y: top!.toFixed(2).toString(),
        });
      }
    }
  }, [editor, selectedObjects]);

  useEffect(() => {
    if (editor) {
      editor.canvas.on('object:scaling', onObjectScaling);
      editor.canvas.on('object:moving', onObjectScaling);
    }
  }, []);

  return (
    <SizeCoordWrap>
      <Title>Size & Coords</Title>
      <DividerX />
      <div className="main">
        <div className="size wrap-group">
          <Input
            value={dimensions.width}
            onChange={(value) => handleDimensionChange('width', value)}
            sin="W"
          />
          <Input
            value={dimensions.height}
            onChange={(value) => handleDimensionChange('height', value)}
            sin="H"
          />
          <div className="lock btn-numb">
            <Icon name="unlockIcon" hover={false} size="small" />
          </div>
        </div>
        <div className="coord wrap-group">
          <Input
            value={dimensions.x}
            onChange={(value) => handleDimensionChange('x', value)}
            sin="X"
          />
          <Input
            value={dimensions.y}
            onChange={(value) => handleDimensionChange('y', value)}
            sin="Y"
          />
          <Input
            value={dimensions.angle}
            onChange={(value) => handleDimensionChange('angle', value)}
            sin="R"
          />
        </div>
      </div>
    </SizeCoordWrap>
  );
}

const SizeCoordWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .main {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .wrap-group {
    display: flex;
    gap: 10px;
  }

  .btn-numb {
    width: 33%;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${(props) => props.theme.radius.medium};
    font-size: 13px;
    cursor: pointer;
  }
`;
