export interface Theme {
  colors: {
    accent: string;
    primary: string;
    secondary: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    accent: '#1521cc',
    primary: '#ffffff',
    secondary: '#fafafa',
  },
};

export const darkTheme: Theme = {
  colors: {
    accent: '#1521cc',
    primary: '#2c2c2c',
    secondary: '#1e1e1e',
  },
};
