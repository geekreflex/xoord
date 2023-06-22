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

const Wrap = styled.div`
  width: 100%;
  .font-select-wrap {
    font-size: 12px;
    padding: 10px 15px;
    font-weight: 600;
    height: 35px;
    background-color: ${(props) => props.theme.colors.highlightColor};
    border-radius: ${(props) => props.theme.radius.medium};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }
`;
