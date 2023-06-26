export interface Theme {
  resets: {
    btnInputHeight: string;
  };
  colors: {
    accent: string;
    primary: string;
    secondary: string;
    borderColor: string;
    hoverActiveColor: string;
    hoverColor: string;
    textColor: string;
    scrollbarThumbColor: string;
  };
  radius: {
    small: string;
    medium: string;
    large: string;
  };
  shadow: {
    shadow1: string;
    shadow2: string;
  };
}

export const lightTheme: Theme = {
  resets: {
    btnInputHeight: '32px',
  },
  colors: {
    accent: '#1521cc',
    primary: '#ffffff',
    secondary: '#f3f3f3',
    borderColor: '#e5e5e5',
    hoverColor: '#f1f1f1',
    hoverActiveColor: '',
    textColor: '#111111',
    scrollbarThumbColor: '#eee',
  },
  radius: {
    small: '4px',
    medium: '8px',
    large: '30px',
  },
  shadow: {
    shadow1: 'rgba(0, 0, 0, 0.16) 0px 1px 4px;',
    shadow2: ' rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;',
  },
};

export const darkTheme: Theme = {
  resets: {
    btnInputHeight: '32px',
  },
  colors: {
    accent: '#307FF4',
    primary: '#121212',
    secondary: '#080808',
    borderColor: '#202020',
    hoverColor: '#1b1b1b',
    hoverActiveColor: '#090909',
    textColor: '#eee',
    scrollbarThumbColor: '#333333',
  },
  radius: {
    small: '4px',
    medium: '8px',
    large: '30px',
  },
  shadow: {
    shadow1: 'rgba(0, 0, 0, 0.5) 0px 1px 4px;',
    shadow2: 'rgba(0, 0, 0, 0.8) 0px 25px 20px -20px',
  },
};
