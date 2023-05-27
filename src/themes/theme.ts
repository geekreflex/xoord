export interface Theme {
  colors: {
    primaryColor: string;
    secondaryColor: string;
    sceneBg: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    primaryColor: '#ffffff',
    secondaryColor: '#bbb',
    sceneBg: '#f5f4f3',
  },
};

export const darkTheme: Theme = {
  colors: {
    primaryColor: '#2c2c2c',
    secondaryColor: '#1e1e1e',
    sceneBg: '#1e1e1e',
  },
};
