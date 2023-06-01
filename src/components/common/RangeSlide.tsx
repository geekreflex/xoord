import { styled } from 'styled-components';

export default function RangeSlider() {
  return (
    <RangeWrap>
      <input type="range" min="1" max="100" id="range" />
    </RangeWrap>
  );
}

const RangeWrap = styled.div`
  input {
    appearance: none;
    width: 100%;
    height: 15px;
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
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: #04aa6d;
      cursor: pointer;
    }
  }
`;
