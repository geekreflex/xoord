import { styled } from 'styled-components';
import FontList from './widget/FontList';
import { ArrowDownIcon } from '@/icons';
import { useRef, useState } from 'react';
import useClickOutside from '@/hooks/useClickOutside';

export default function FontSelect() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useClickOutside(ref, () => setVisible(false));

  const handleToggle = () => {
    setVisible(!visible);
  };

  return (
    <Wrap ref={ref}>
      <div role="button" className="font-select-wrap" onClick={handleToggle}>
        <div className="font-select-value">Roboto</div>
        <span className="arr-down-icon">
          <ArrowDownIcon />
        </span>
      </div>
      {visible && <FontList close={() => setVisible(false)} />}
    </Wrap>
  );
}

const Wrap = styled.div``;
