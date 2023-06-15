import { styled } from 'styled-components';
import Tooltip from './shared/Tooltip';
import Icon from './shared/Icon';
import Popup from './shared/Popup';
import useClickOutside from '@/hooks/useClickOutside';
import { useRef, useState } from 'react';
import { useEditorContext } from '@/context/EditorContext';
import { GridItem, GridItems } from '@/styles/global';
import { GridItemProps } from '@/types/app';

export default function FlipRotate() {
  const { controller } = useEditorContext();
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useClickOutside(ref, () => setVisible(false));

  const flips: GridItemProps[] = [
    {
      name: 'Horizontal',
      icon: 'arrowSwapXIcon',
      func: () => controller?.flipX(),
      alias: 'flipx',
    },

    {
      name: 'Vertical',
      icon: 'arrowSwapYIcon',
      func: () => controller?.flipY(),
      alias: 'flipy',
    },
  ];

  const rotates: GridItemProps[] = [
    {
      name: 'Rotate Left 90°',
      icon: 'rotateLeftIcon',
      func: () => controller?.rotateLeft(90),
      alias: 'r-left',
    },
    {
      name: 'Rotate Right 90°',
      icon: 'rotateRightIcon',
      func: () => controller?.rotateRight(90),
      alias: 'r-right',
    },
  ];

  return (
    <Wrap ref={ref}>
      <div>
        {visible && (
          <Popup placement="top" offset={60}>
            <div className="inner">
              <div>
                <GridItems>
                  {flips.map((flip) => (
                    <GridItem key={flip.alias} onClick={flip.func}>
                      <Icon name={flip.icon} hover={false} />
                      <p>{flip.name}</p>
                    </GridItem>
                  ))}
                </GridItems>
              </div>
              <div>
                <GridItems>
                  {rotates.map((rotate) => (
                    <GridItem key={rotate.alias} onClick={rotate.func}>
                      <Icon name={rotate.icon} hover={false} />
                      <p>{rotate.name}</p>
                    </GridItem>
                  ))}
                </GridItems>
              </div>
            </div>
          </Popup>
        )}
      </div>
      <Tooltip content="Flip and Rotate">
        <Icon name="rotateLeftIcon" click={() => setVisible(true)} />
      </Tooltip>
    </Wrap>
  );
}

const Wrap = styled.div`
  /* position: relative; */
  display: flex;

  .inner {
    width: 300px;
    padding: 0 5px;
  }
`;
