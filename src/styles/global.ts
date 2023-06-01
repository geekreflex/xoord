import { createGlobalStyle, styled } from 'styled-components';

export default createGlobalStyle`
body {
  color: ${(props) => props.theme.colors.textColor};
}

button {
  /* color: inherit;
  background-color: ${(props) => props.theme.colors.secondaryColor};
  border: none;
  outline: none; */
}
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #999;
  margin: 6px 0;
  position: relative;
  &:before {
    content: '';
    background-color: #888;
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 1px;
  }
`;
