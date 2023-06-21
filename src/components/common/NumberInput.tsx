import { ArrowDownIcon, ArrowUpIcon } from '@/icons';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

interface NumberInputProps {
  min?: number;
  max?: number;
  value: number;
  label?: string;
  onChange?: (value: number) => void;
}

export default function NumberInput({
  min = 1,
  max = 100,
  value,
  label,
  onChange,
}: NumberInputProps) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    if (value) {
      setInputValue(value);
    }
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(event.target.value));
  };

  const handleIncrement = () => {
    const parsedValue = inputValue || min;
    const incrementedValue = Number(parsedValue) + 1;
    const newValue = Math.min(max, incrementedValue);
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleDecrement = () => {
    const parsedValue = inputValue || min;
    const incrementedValue = Number(parsedValue) - 1;
    const newValue = Math.min(max, incrementedValue);
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Wrap>
      <input
        type="number"
        min={min}
        max={max}
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className="input-btns">
        <button onClick={handleIncrement}>
          <ArrowUpIcon />
        </button>
        <button onClick={handleDecrement}>
          <ArrowDownIcon />
        </button>
      </div>
      <div className="input-label">{label}</div>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  height: 35px;
  display: flex;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.radius.medium};
  overflow: hidden;
  &:hover {
    .input-btns {
      opacity: 1;
    }

    .input-label {
      display: none;
    }
  }

  input {
    border: none;
    outline: none;
    background-color: transparent;
    color: #fff;
    padding: 0 10px;
    width: 100%;
  }

  .input-label {
    width: 30px;
    position: absolute;
    right: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    background-color: ${(props) => props.theme.colors.secondary};
  }

  .input-btns {
    display: flex;
    flex-direction: column;
    width: 40px;
    opacity: 0;

    button {
      height: 50%;
      flex: 1;
      border: none;
      outline: none;
      background-color: transparent;
      color: ${(props) => props.theme.colors.textColor};
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      stroke-width: 4px;
      font-size: 10px;
      cursor: row-resize;
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }

      path {
        stroke-width: 4px;
      }
    }
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
