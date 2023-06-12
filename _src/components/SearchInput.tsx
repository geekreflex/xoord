import { Close2Icon, SearchIcon } from '@/icons';
import { styled } from 'styled-components';

export default function SearchInput() {
  return (
    <SearchInputWrap>
      <div className="input-wrap">
        <span className="icon search">
          <SearchIcon />
        </span>
        <input />
        <span className="icon cancel">
          <Close2Icon />
        </span>
      </div>
    </SearchInputWrap>
  );
}

const SearchInputWrap = styled.div`
  .input-wrap {
    display: flex;
    border: 1px solid ${(props) => props.theme.colors.borderColor2};
    border-radius: ${(props) => props.theme.radius.small};
    input {
      width: 100%;
      height: 35px;
      border: none;
      outline: none;
      font-size: 14px;
      font-weight: 600;
      color: ${(props) => props.theme.colors.textColo2};
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    path,
    svg {
      stroke-width: 2px;
    }
  }
`;
