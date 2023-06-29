import { styled } from 'styled-components';
import NumberInput from './common/NumberInput';
import Range from './common/Range';
import { useEffect, useState } from 'react';
import { useEditorContext } from '@/context/EditorContext';
import {
  regularPolygonPoints,
  starPolygonPoints,
} from '@/core/lib/polygonPoints';

export default function PolygonProps() {
  const { editor, selectedObject } = useEditorContext();
  const [points, setPoints] = useState(0);

  useEffect(() => {
    if (selectedObject) {
      if (selectedObject.name === 'star') {
        setPoints(Math.floor(selectedObject.points?.length! / 2) || 0);
      } else {
        setPoints(selectedObject.points?.length || 0);
      }
    }
  }, [selectedObject]);

  const handleSides = (sides: number) => {
    if (editor) {
      const polygon = editor.canvas.getActiveObject() as fabric.Polygon;

      if (sides < 3) {
        return;
      }

      if (sides > 32) {
        return;
      }

      if (polygon) {
        const { width, height, left, top } = polygon._calcDimensions();
        let newPoints = (
          polygon.name === 'star'
            ? starPolygonPoints(sides, 50, 100)
            : regularPolygonPoints(sides, 100)
        ) as fabric.Point[];
        polygon.set({
          points: newPoints,
          width,
          height,
          originX: 'left',
          originY: 'top',
          pathOffset: new fabric.Point(left + width / 2, top + height / 2),
        });
        polygon.setCoords();
        editor.canvas.renderAll();

        if (polygon.name === 'star') {
          // if (sides % 2 === 0) {
          setPoints(Math.floor(polygon.points?.length! / 2));
          // }
        } else {
          setPoints(sides);
        }
      }
    }
  };

  const handleInset = () => {};

  return (
    <Wrap>
      <div className="sides">
        <div className="input-number-range-wrap">
          <h4>{selectedObject?.name === 'star' ? 'Points' : 'Sides'} </h4>
          <div className="number-wrap">
            <NumberInput value={points} onChange={handleSides} />
          </div>
        </div>
        {selectedObject?.name === 'star' ? (
          <Range
            min={5}
            max={32}
            step={1}
            value={points}
            onChange={handleSides}
          />
        ) : (
          <Range
            min={5}
            max={12}
            step={1}
            value={points || 0}
            onChange={handleSides}
          />
        )}
      </div>
      {selectedObject?.name === 'star' && (
        <div className="inset">
          <div className="input-number-range-wrap">
            <h4>Inset </h4>
            <div className="number-wrap">
              <NumberInput value={5} onChange={handleInset} />
            </div>
          </div>

          <Range min={5} max={12} step={1} value={5} onChange={handleInset} />
        </div>
      )}
    </Wrap>
  );
}

const Wrap = styled.div``;
