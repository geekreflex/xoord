import { Close2Icon, SearchIcon } from '@/icons';
import { styled } from 'styled-components';

interface SearchInputProps {
  placeholder: string;
  query: string;
  onChange: (value: string) => void;
}

export default function SearchInput({
  placeholder,
  query,
  onChange,
}: SearchInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(value);
  };

  const handleClear = () => {
    onChange('');
  };

  return (
    <Wrap>
      <div className="input-wrap">
        <span className="input-search-icon">
          <SearchIcon />
        </span>
        <input
          type="text"
          placeholder={placeholder || 'Search here...'}
          onChange={handleChange}
          value={query}
        />
        {query && (
          <span
            className="input-search-icon arr-down-icon"
            onClick={handleClear}
          >
            <Close2Icon />
          </span>
        )}
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  width: 100%;

  .input-wrap {
    display: flex;
    border: none;
    outline: none;
    align-items: center;
    width: 100%;
    border-radius: ${(props) => props.theme.radius.small};
    border: 1px solid ${(props) => props.theme.colors.borderColor};

    input {
      width: calc(100% - 60px);
      border: none;
      outline: none;
      height: 35px;
      background-color: transparent;
      color: ${(props) => props.theme.colors.textColor};
    }

    .input-search-icon {
      width: 30px !important;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }
`;
