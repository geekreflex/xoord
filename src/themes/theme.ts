export interface Theme {
  colors: {
    primaryColor: string;
    secondaryColor: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    primaryColor: '#ffffff',
    secondaryColor: '#bbb',
  },
};

export const darkTheme: Theme = {
  colors: {
    primaryColor: '#212121',
    secondaryColor: '#444444',
  },
};
