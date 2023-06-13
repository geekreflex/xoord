export interface Theme {
  colors: {
    accent: string;
    primary: string;
    secondary: string;
    borderColor: string;
    hoverColor: string;
    textColor: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    accent: '#1521cc',
    primary: '#ffffff',
    secondary: '#fafafa',
    borderColor: '#dedede',
    hoverColor: '#f1f1f1',
    textColor: '#111111',
  },
};

export const darkTheme: Theme = {
  colors: {
    accent: '#1521cc',
    primary: '#1e1e1e',
    secondary: '#2c2c2c',
    borderColor: '#444444',
    hoverColor: '#2c2c2c',
    textColor: '#f5f5f5',
  },
};
