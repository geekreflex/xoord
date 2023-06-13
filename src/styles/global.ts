import { createGlobalStyle } from 'styled-components';

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
