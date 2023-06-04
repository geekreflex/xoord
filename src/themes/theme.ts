export interface Theme {
  colors: {
    accent: string;
    primaryColor: string;
    secondaryColor: string;
    sceneBg: string;
    textColor: string;
    borderColor: string;
    borderColor2: string;
    hoverColor1: string;
    hoverColor2: string;
  };
  shadow: {
    shadow1: string;
  };
  radius: {
    small: string;
    medium: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    accent: '#1521cc',
    primaryColor: '#ffffff',
    secondaryColor: '#fafafa',
    sceneBg: '#f5f4f3',
    textColor: '#111111',
    borderColor: '#dedede',
    borderColor2: '#c5c5c5',
    hoverColor1: '#e5e5e5',
    hoverColor2: '#f5f5f5',
  },
  shadow: {
    shadow1: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
  },
  radius: {
    small: '5px',
    medium: '10px',
  },
};

export const darkTheme: Theme = {
  colors: {
    accent: '#1521cc',
    primaryColor: '#2c2c2c',
    secondaryColor: '#1e1e1e',
    sceneBg: '#1e1e1e',
    textColor: '#f5f5f5',
    borderColor: '',
    borderColor2: '',
    hoverColor1: '',
    hoverColor2: '',
  },
  shadow: {
    shadow1: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
  },
  radius: {
    small: '5px',
    medium: '10px',
  },
};
