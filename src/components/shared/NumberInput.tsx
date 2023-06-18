import { ArrowDownIcon, ArrowUpIcon } from '@/icons';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

interface NumberInputProps {
  min?: number;
  max?: number;
  value: number;
  unit?: string;
  onChange?: (value: number) => void;
}

export default function NumberInput({
  min = 1,
  max = 1000,
  value,
  unit = 'px',
  onChange,
}: NumberInputProps) {
  const [inputValue, setInputValue] = useState<number>(value);

  useEffect(() => {
    if (value) {
      setInputValue(value);
    }
  }, [value]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value.replace(/[^0-9-]/g, '');

    if (sanitizedValue === '' || isNaN(parseInt(sanitizedValue))) {
      // Handle invalid or empty input
      setInputValue(0);
    } else {
      setInputValue(parseInt(sanitizedValue));
    }
  };

  const onInputBlur = () => {
    if (onChange) {
      onChange(inputValue);
    }
  };

  const onIncrement = () => {
    const parsedValue = inputValue || min;
    const incrementedValue = Number(parsedValue) + 1;
    const newValue = Math.min(max, incrementedValue);
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const onDecrement = () => {
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
        value={inputValue}
        onChange={onInputChange}
        onBlur={onInputBlur}
      />
      <div className="input-unit">{unit}</div>
      <div className="input-btns">
        <button onClick={onIncrement}>
          <ArrowUpIcon />
        </button>
        <button onClick={onDecrement}>
          <ArrowDownIcon />
        </button>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  display: flex;
  border-radius: 4px;
  overflow: hidden;

  input {
    border: none;
    outline: none;
    background-color: transparent;
    flex: 1;
    height: 32px;
    text-align: right;
    width: 100%;
    color: ${(props) => props.theme.colors.textColor};
  }

  .input-unit {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 3px;
    margin-right: 5px;
    font-size: 13px;
  }

  .input-btns {
    display: flex;
    flex-direction: column;
    width: 35px;
    border-left: 1px solid ${(props) => props.theme.colors.borderColor};
    button {
      border: none;
      outline: none;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      cursor: row-resize;
      font-size: 10px;
      color: ${(props) => props.theme.colors.textColor};

      &:hover {
        background-color: ${(props) => props.theme.colors.secondary};
      }
      svg,
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
