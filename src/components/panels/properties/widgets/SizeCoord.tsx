import Icon from '@/components/common/Icon';
import { Input } from '@/components/common/Input';
import { useEditorContext } from '@/context/EditorContext';
import { DividerX, Title } from '@/styles/global';
import { fabric } from 'fabric';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

export default function SizeCoord() {
  const { selectedObjects, selectedType, editor } = useEditorContext();
  const [dimensions, setDimensions] = useState({
    width: '0',
    height: '0',
    angle: '0',
    x: '0',
    y: '0',
  });

  useEffect(() => {
    const canvas = editor?.canvas;

    if (canvas) {
      canvas.on('object:scaling', handleSizing);
      canvas.on('object:moving', handleMoving);
      canvas.on('object:rotating', handleRotating);
    }

    return () => {
      if (canvas) {
        canvas.off('object:scaling', handleSizing);
        canvas.off('object:moving', handleMoving);
        canvas.off('object:rotating', handleRotating);
      }
    };
  }, [editor]);

  const handleSizing = (e: fabric.IEvent) => {
    const target = e.target as fabric.Object;
    const { width, height } = target;
    const { scaleX, scaleY } = target;

    if (selectedType) {
      console.log(selectedType);
    }

    setDimensions((prevDimensions) => ({
      ...prevDimensions,
      width: (width! * scaleX!).toFixed(2).toString(),
      height: (height! * scaleY!).toFixed(2).toString(),
    }));
  };

  const handleMoving = (e: fabric.IEvent) => {
    const target = e.target as fabric.Object;
    const { left, top } = target;
    const { scaleX, scaleY } = target;
    setDimensions((prevDimensions) => ({
      ...prevDimensions,
      x: (left! * scaleX!).toFixed(2).toString(),
      y: (top! * scaleY!).toFixed(2).toString(),
    }));
  };

  const handleRotating = (e: fabric.IEvent) => {
    const target = e.target as fabric.Object;
    const { angle } = target;
    setDimensions((prevDimensions) => ({
      ...prevDimensions,
      angle: angle!.toFixed(2).toString(),
    }));
  };

  useEffect(() => {
    if (selectedObjects) {
      const { left, top, width, height, angle } = selectedObjects[0];
      setDimensions({
        x: left!.toFixed(2).toString(),
        y: top!.toFixed(2).toString(),
        width: width!.toFixed(2).toString(),
        height: height!.toFixed(2).toString(),
        angle: angle!.toFixed(2).toString(),
      });
    }
  }, [selectedObjects]);

  const handleDimensionChange = (key: string, value: string) => {
    setDimensions((prevDimensions) => ({
      ...prevDimensions,
      [key]: value,
    }));
    if (selectedObjects) {
      const obj = selectedObjects[0];
      obj.set({
        [key]: parseFloat(value),
      });
    }
    editor?.canvas.renderAll();
  };

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
