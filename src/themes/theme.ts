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
    btnBgColor: string;
    btnHoverColor: string;
  };
  radius: {
    medium: string;
  };
  shadow: {
    shadow1: string;
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
    btnBgColor: '#d9d9d9',
    btnHoverColor: '#bfbfc0',
  },
  radius: {
    medium: '4px',
  },
  shadow: {
    shadow1: 'rgba(0, 0, 0, 0.16) 0px 1px 4px;',
  },
};

export const darkTheme: Theme = {
  colors: {
    accent: '#307FF4',
    primary: '#1A1C1E',
    secondary: '#141517',
    borderColor: '#2e2e2e',
    hoverColor: '#2d2d2d',
    textColor: '#f5f5f5',
    tooltipBg: '#222222',
    tooltipColor: '#f5f5f5',
    btnBgColor: '#262B2B',
    btnHoverColor: '#242929',
  },
  radius: {
    medium: '4px',
  },
  shadow: {
    shadow1: 'rgba(0, 0, 0, 0.5) 0px 1px 4px;',
  },
};

// export const _darkTheme = {
//   colors: {
//     accent: '#1521cc',
//     primary: '#171717',
//     secondary: '#111111',
//     borderColor: '#2e2e2e',
//     hoverColor: '#2d2d2d',
//     textColor: '#f5f5f5',
//     tooltipBg: '#222222',
//     tooltipColor: '#f5f5f5',
//   },
//   radius: {
//     medium: '4px',
//   },
//   shadow: {
//     shadow1: 'rgba(0, 0, 0, 0.5) 0px 1px 4px;',
//   },
// };
