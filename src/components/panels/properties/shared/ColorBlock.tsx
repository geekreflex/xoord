import { SettingsIcon } from '@/icons';
import { useRef, useState } from 'react';
import { styled } from 'styled-components';
import Color from './Color';

interface CBType {
  color: string | undefined;
  onChange: (value: string) => void;
}

export default function ColorBlock({ color, onChange }: CBType) {
  const [visible, setVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleBlockClick = () => {
    // if (inputRef && inputRef.current) {
    //   inputRef.current.click();
    // }
    setVisible(!visible);
  };
  return (
    <CBWrap>
      {visible && <Color color={color} onChange={onChange} />}
      <div
        onClick={handleBlockClick}
        className="block"
        style={{
          backgroundColor: color,
        }}
      >
        {/* <input ref={inputRef} type="color" onChange={onChange} value={color} /> */}
        <span className="color-block-icon">
          <SettingsIcon />
        </span>
      </div>
    </CBWrap>
  );
}

const CBWrap = styled.div`
  display: flex;

  div {
    /* flex: 1; */
  }

  input {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }

  .block {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 100ms;
    &:hover .color-block-icon {
      opacity: 1;
    }
  }

  .color-block-icon {
    opacity: 0;
    background-color: ${(props) => props.theme.colors.primaryColor};
    display: flex;
    padding: 3px;
    border-radius: 50%;
    transition: all 100ms;
    pointer-events: none;

    svg,
    path {
      stroke-width: 2px;
    }
  }
`;
