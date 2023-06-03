import { styled } from 'styled-components';

export default function InputNum() {
  return (
    <InputNumWrap>
      <div className="input-inner">
        <div className="input-main">
          <input />
        </div>
        <div className="input-btns">
          <button>u</button>
          <button>d</button>
        </div>
      </div>
    </InputNumWrap>
  );
}

const InputNumWrap = styled.div`
  display: flex;

  .input-inner {
    display: flex;
    border: 1px solid ${(props) => props.theme.colors.borderColor2};
    border-radius: 5px;
    overflow: hidden;
  }

  .input-main {
    display: flex;
    input {
      border: none;
      height: 35px;
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
      &:hover {
        background-color: ${(props) => props.theme.colors.hoverColor1};
        cursor: row-resize;
      }
    }
  }
`;
