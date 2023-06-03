import { useRef } from 'react';
import { styled } from 'styled-components';

interface CBType {
  color: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ColorBlock({ color, onChange }: CBType) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleBlockClick = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.click();
    }
  };
  return (
    <CBWrap>
      <div
        onClick={handleBlockClick}
        className="block"
        style={{
          backgroundColor: color,
        }}
      >
        <input ref={inputRef} type="color" onChange={onChange} value={color} />
      </div>
    </CBWrap>
  );
}

const CBWrap = styled.div`
  display: flex;

  div {
    flex: 1;
  }

  input {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }
`;
