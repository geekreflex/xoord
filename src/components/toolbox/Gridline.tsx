import { styled } from 'styled-components';
import Icon from '../common/Icon';
import { useEditorContext } from '@/context/EditorContext';
import { useEffect, useRef, useState } from 'react';
import Popup from '../common/Popup';
import useClickOutside from '@/hooks/useClickOutside';
import ToggleSwitch from '../common/ToggleSwitch';
import { Input } from '../common/Input';

export default function Gridline() {
  const { gridLine } = useEditorContext();
  const ref = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
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

  const onShowGridPopup = () => {
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

  useClickOutside(ref, () => setVisible(false));

  return (
    <GridWrap ref={ref}>
      <Icon name="grid1Icon" size="big" click={onShowGridPopup} />
      {visible && (
        <Popup title="Guide Lines" close={onShowGridPopup}>
          <GridPop>
            <ToggleSwitch
              checked={isChecked}
              onChange={onGridToggle}
              id="gridline"
            />
            <div className="input-wrap">
              <Input value={xSize} onChange={onXSizeChange} sin="X" />
              <span className="grid-lock">
                <Icon
                  click={onToggleLock}
                  size="small"
                  name={isLocked ? 'lockIcon' : 'unlockIcon'}
                />
              </span>

              <Input value={ySize} onChange={onYSizeChange} sin="Y" />
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
  display: flex;
  flex-direction: column;
  gap: 10px;
  .input-wrap {
    display: flex;
    gap: 5px;
    flex-wrap: nowrap;
    align-items: center;
  }

  .grid-lock {
    display: flex;
  }
`;
