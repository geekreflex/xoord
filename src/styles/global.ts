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
  margin: 6px 0;
  position: relative;
`;

export const Title = styled.h4`
  font-size: 14px;
  line-height: 1;
  display: flex;
`;

export const DividerX = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.borderColor};
  margin: 10px 0;
`;
