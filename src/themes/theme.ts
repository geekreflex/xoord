export interface Theme {
  colors: {
    primaryColor: string;
    secondaryColor: string;
    sceneBg: string;
    textColor: string;
    borderColor: string;
    hoverColor1: string;
  };
  shadow: {
    shadow1: string;
  };
  radius: {
    medium: string;
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
  shadow: {
    shadow1: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
  },
  radius: {
    medium: '10px',
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
  shadow: {
    shadow1: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
  },
  radius: {
    medium: '10px',
  },
};
