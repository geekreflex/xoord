import { ArrowDownIcon, ArrowUpIcon } from '@/icons';
import { useState } from 'react';
import { styled } from 'styled-components';

interface CustomInputProps {
  min?: number;
  max?: number;
  label?: string;
}

export default function CustomInput({
  min = 1,
  max = 100,
  label,
}: CustomInputProps) {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value.replace(/[^0-9-]/g, '');
    setValue(sanitizedValue);
  };

  const handleIncrement = () => {
    setValue((prevValue) => {
      const parsedValue = parseInt(prevValue, 10) || 10;
      const incrementedValue = parsedValue + 1;
      return String(Math.min(max, incrementedValue));
    });
  };

  const handleDecrement = () => {
    setValue((prevValue) => {
      const parsedValue = parseInt(prevValue, 10) || 10;
      const decrementedValue = parsedValue - 1;
      return String(Math.max(min, decrementedValue));
    });
  };

  return (
    <InputNumWrap>
      {label && <label>{label}</label>}
      <div className="input-inner">
        <div className="input-main">
          <input type="number" value={value} onChange={handleChange} />
          <div>px</div>
        </div>
        <div className="input-btns">
          <button onClick={handleIncrement}>
            <ArrowUpIcon />
          </button>
          <button onClick={handleDecrement}>
            <ArrowDownIcon />
          </button>
        </div>
      </div>
    </InputNumWrap>
  );
}

const InputNumWrap = styled.div`
  display: flex;
  flex-direction: column;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .input-inner {
    display: flex;
    border: 1px solid ${(props) => props.theme.colors.borderColor2};
    border-radius: 5px;
    overflow: hidden;
    background-color: #fff;
  }

  .input-main {
    display: flex;
    flex: 1;
    input {
      border: none;
      height: 35px;
      outline: none;
      font-weight: 600;
      padding-left: 10px;
    }
    div {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 600;
      padding: 0 5px;
    }
  }

  .input-btns {
    border-left: 1px solid ${(props) => props.theme.colors.borderColor2};
    width: 30px;
    display: flex;
    flex-direction: column;
    button {
      flex: 1;
      border: none;
      outline: none;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      &:hover {
        background-color: ${(props) => props.theme.colors.hoverColor1};
        cursor: row-resize;
      }
      svg,
      path {
        stroke-width: 4px;
      }
    }
  }
`;
