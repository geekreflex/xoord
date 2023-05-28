export interface Theme {
  colors: {
    primaryColor: string;
    secondaryColor: string;
    sceneBg: string;
    textColor: string;
    borderColor: string;
    hoverColor1: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    primaryColor: '#ffffff',
    secondaryColor: '#bbb',
    sceneBg: '#f5f4f3',
    textColor: '#111111',
    borderColor: '#dedede',
    hoverColor1: '#f5f5f5',
  },
};

export const darkTheme: Theme = {
  colors: {
    primaryColor: '#2c2c2c',
    secondaryColor: '#1e1e1e',
    sceneBg: '#1e1e1e',
    textColor: '#f5f5f5',
    borderColor: '',
    hoverColor1: '',
  },
};
