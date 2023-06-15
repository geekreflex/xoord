import { createGlobalStyle, styled } from 'styled-components';

export default createGlobalStyle`
  body {
    color: ${(props) => props.theme.colors.textColor};
  }

  /* For Webkit based browsers (Chrome, Safari, Opera) */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* ::-webkit-scrollbar-track {
    background: #f1f1f1;
  } */

  ::-webkit-scrollbar-thumb {
    background: #bbb;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

`;

export const GridItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
`;

export const GridItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  gap: 5px;
  border-radius: ${(props) => props.theme.radius.medium};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.hoverColor};
  }

  p {
    font-size: 12px;
    font-weight: 600;
  }
`;
