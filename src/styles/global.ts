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

export const BtnPrimary = styled.div`
  display: flex;
  button {
    border: none;
    outline: none;
    width: 100%;
    height: 40px;
    border-radius: ${(props) => props.theme.radius.small};
    font-weight: 600;
    background-color: #1521cc;
    color: #fff;
    cursor: pointer;
  }
`;
