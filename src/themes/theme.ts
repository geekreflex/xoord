export interface Theme {
  colors: {
    primaryColor: string;
    secondaryColor: string;
    sceneBg: string;
    textColor: string;
    borderColor: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    primaryColor: '#ffffff',
    secondaryColor: '#bbb',
    sceneBg: '#f5f4f3',
    textColor: '#111111',
    borderColor: '#dedede',
  },
};

export const darkTheme: Theme = {
  colors: {
    primaryColor: '#2c2c2c',
    secondaryColor: '#1e1e1e',
    sceneBg: '#1e1e1e',
    textColor: '#f5f5f5',
    borderColor: '',
  },
};
