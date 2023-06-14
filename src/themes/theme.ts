export interface Theme {
  colors: {
    accent: string;
    primary: string;
    secondary: string;
    borderColor: string;
    hoverColor: string;
    textColor: string;
    tooltipBg: string;
    tooltipColor: string;
  };
  radius: {
    medium: string;
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
    tooltipBg: '#171717',
    tooltipColor: '#fafafa',
  },
  radius: {
    medium: '4px',
  },
};

export const darkTheme: Theme = {
  colors: {
    accent: '#1521cc',
    primary: '#171717',
    secondary: '#111111',
    borderColor: '#2e2e2e',
    hoverColor: '#2c2c2c',
    textColor: '#f5f5f5',
    tooltipBg: '#222222',
    tooltipColor: '#f5f5f5',
  },
  radius: {
    medium: '4px',
  },
};
