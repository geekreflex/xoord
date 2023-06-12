import { styled } from 'styled-components';

interface RangeSliderProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: string;
  max?: string;
  value: string;
  label?: string;
}

export default function RangeSlider({
  onChange,
  min = '1',
  max = '100',
  value,
  label,
}: RangeSliderProps) {
  return (
    <RangeWrap>
      {label && <label>{label}</label>}
      <input
        type="range"
        min={min}
        value={value}
        max={max}
        id="range"
        onChange={onChange}
      />

      <span className="input-sec">
        <input value={value} onChange={onChange} type="number" />
      </span>
    </RangeWrap>
  );
}

const RangeWrap = styled.div`
  position: relative;
  input[type='range'] {
    appearance: none;
    width: 100%;
    height: 3px;
    border-radius: 5px;
    background-color: #d3d3d3;
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2;
    &:hover {
      opacity: 1;
    }
    &::-webkit-slider-thumb {
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #ffffff;
      border: 2px solid ${(props) => props.theme.colors.borderColor2};
      cursor: pointer;
      transition: all 300ms;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  label {
    font-size: 14px;
    font-weight: 600;
  }

  span.input-sec {
    position: absolute;
    right: 0;
    bottom: 20px;
    width: 50px;
    border: 1px solid ${(props) => props.theme.colors.borderColor2};
    border-radius: ${(props) => props.theme.radius.small};
    overflow: hidden;

    input {
      width: 100%;
      font-weight: 600;
      border: none;
      outline: none;
      flex: 1;
      padding: 10px;
      height: 30px;
    }
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
