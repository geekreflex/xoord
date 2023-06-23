export interface Theme {
  colors: {
    accent: string;
    primary: string;
    secondary: string;
    borderColor: string;
    highlightColor: string;
    hoverColor: string;
    textColor: string;
    tooltipBg: string;
    tooltipColor: string;
    btnBgColor: string;
    btnHoverColor: string;
    panelBg: string;
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
  colors: {
    accent: '#1521cc',
    primary: '#ffffff',
    secondary: '#eeeeee',
    borderColor: '#e5e5e5',
    hoverColor: '#f1f1f1',
    highlightColor: '#f3f3f3',
    textColor: '#111111',
    tooltipBg: '#171717',
    tooltipColor: '#fafafa',
    btnBgColor: '#ddd',
    btnHoverColor: '#e1e1e1',
    panelBg: '#fff',
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
  colors: {
    accent: '#307FF4',
    primary: '#121212',
    secondary: '#000000',
    borderColor: '#1e1e1e',
    hoverColor: '#181818',
    highlightColor: '#2b2b2b',
    textColor: '#eee',
    tooltipBg: '#080808',
    tooltipColor: '#f5f5f5',
    btnBgColor: '#080808',
    btnHoverColor: '#030303',
    panelBg: '#1A1C1E',
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
