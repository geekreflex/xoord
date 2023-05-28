import { styled } from 'styled-components';
import Icon from '../common/Icon';
import { useEditor } from '@/context/EditorContext';
import { useEffect, useState } from 'react';

export default function Gridline() {
  const [visible, setVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { gridLine } = useEditor();
  const [xSize, setXSize] = useState<string>('4');
  const [ySize, setYSize] = useState<string>('4');

  useEffect(() => {
    if (gridLine) {
      setIsChecked(gridLine.isVisible());
    }
  }, [gridLine]);

  useEffect(() => {
    if (gridLine) {
      gridLine.setGridSize(parseInt(xSize), parseInt(ySize));
      if (gridLine.isVisible()) {
        gridLine.toggleGrid(true);
      }
    }
  }, [xSize, ySize]);

  const onShowGrid = () => {
    setVisible(!visible);
  };

  const onGridToggle = () => {
    const showGrid = !isChecked;
    gridLine?.toggleGrid(showGrid);
    setIsChecked(showGrid);
  };

  return (
    <GridWrap>
      <Icon name="grid1Icon" click={onShowGrid} />
      {visible && (
        <GridPop>
          <div>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={onGridToggle}
            />
          </div>
          <div>
            <input value={xSize} onChange={(e) => setXSize(e.target.value)} />
            <input value={ySize} onChange={(e) => setYSize(e.target.value)} />
          </div>
        </GridPop>
      )}
    </GridWrap>
  );
}

const GridWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const GridPop = styled.div`
  position: absolute;
  bottom: 50px;
  width: 300px;
  background-color: ${(props) => props.theme.colors.primaryColor};
  padding: 20px;
  border-radius: ${(props) => props.theme.radius.medium};
  box-shadow: ${(props) => props.theme.shadow.shadow1};
  border: 1px solid ${(props) => props.theme.colors.borderColor};
`;
