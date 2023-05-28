import { styled } from 'styled-components';
import Icon from '../common/Icon';
import { useEditor } from '@/context/EditorContext';
import { useEffect, useState } from 'react';
import Popup from '../common/Popup';

export default function Gridline() {
  const [visible, setVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
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

  const onToggleLock = () => {
    setIsLocked(!isLocked);
  };

  const onXSizeChange = (value: string) => {
    if (isLocked) {
      setXSize(value);
      setYSize(value);
      return;
    }
    setXSize(value);
  };

  const onYSizeChange = (value: string) => {
    if (isLocked) {
      setYSize(value);
      setXSize(value);
      return;
    }
    setYSize(value);
  };

  return (
    <GridWrap>
      <Icon name="grid1Icon" click={onShowGrid} />
      {visible && (
        <Popup title="Guide Lines" close={onShowGrid}>
          <GridPop>
            <div>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={onGridToggle}
              />
            </div>
            <div className="input-wrap">
              <input
                value={xSize}
                onChange={(e) => onXSizeChange(e.target.value)}
              />
              <span className="grid-lock">
                <Icon
                  click={onToggleLock}
                  size="small"
                  name={isLocked ? 'lockIcon' : 'unlockIcon'}
                />
              </span>
              <input
                value={ySize}
                onChange={(e) => onYSizeChange(e.target.value)}
              />
            </div>
          </GridPop>
        </Popup>
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
  width: 250px;
  .input-wrap {
    display: flex;
    gap: 5px;
    flex-wrap: nowrap;
    align-items: center;

    input {
      padding: 10px 20px;
      width: 50%;
      border-radius: 10px;
      border: 1px solid ${(props) => props.theme.colors.borderColor};
      outline: none;
      font-weight: 600;
    }
  }

  .grid-lock {
    display: flex;
  }
`;
