import { SearchIcon } from '@/icons';
import { styled } from 'styled-components';

interface SearchInputProps {
  placeholder?: string;
}

export default function SearchInput({ placeholder }: SearchInputProps) {
  return (
    <Wrap>
      <span id="search-icon">
        <SearchIcon />
      </span>
      <input type="text" placeholder={placeholder} />
    </Wrap>
  );
}

const Wrap = styled.div`
  border: 2px solid ${(props) => props.theme.colors.borderColor};
  border-radius: 20px;
  display: flex;
  margin: 0 5px;

  input {
    background-color: transparent;
    border: none;
    outline: none;
    height: 40px;
    color: ${(props) => props.theme.colors.textColor};
  }

  #search-icon {
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.textColor};
  }
`;
