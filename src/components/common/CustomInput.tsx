import { ArrowDownIcon, ArrowUpIcon } from '@/icons';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

interface CustomInputProps {
  min?: number;
  max?: number;
  label?: string;
  value: string;
  ext?: string;
  onChange: (newValue: string) => void;
}

export default function CustomInput({
  min = 1,
  max = 100,
  label,
  value,
  ext,
  onChange,
}: CustomInputProps) {
  const [inputValue, setInputValue] = useState<string>(value);

  useEffect(() => {
    if (ext) {
      setInputValue(ext);
    }
  }, [ext]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value.replace(/[^0-9-]/g, '');
    setInputValue(sanitizedValue);
    if (onChange) {
      onChange(sanitizedValue);
    }
  };

  const handleIncrement = () => {
    const parsedValue = parseInt(value, 10) || min;
    const incrementedValue = Number(parsedValue) + 1;
    const newValue = Math.min(max, incrementedValue).toString();
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleDecrement = () => {
    const parsedValue = parseInt(value, 10) || min;
    const decrementedValue = parsedValue - 1;
    const newValue = Math.max(min, decrementedValue).toString();
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <InputNumWrap>
      {label && <label>{label}</label>}
      <div className="input-inner">
        <div className="input-main">
          <input
            type="number"
            value={inputValue}
            min={min}
            max={max}
            onChange={handleChange}
          />
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
  width: 100%;
  display: flex;
  flex-direction: column;
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  label {
    margin-bottom: 8px;
    font-size: 14px;
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
      flex: 1;
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
