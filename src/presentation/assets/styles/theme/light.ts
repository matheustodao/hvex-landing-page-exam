import { COMMON_STYLES } from './commonStyles';

export const LIGHT_THEME = {
  ...COMMON_STYLES,

  colors: {
    white: '#FFFFFF',
    bg: {
      default: '#FFFFFF',
      section: '#FDFDFD'
    },

    gray: {
      900: '#373737',
      100: '#FDFDFD',
    },

    primary: {
      main: '#1C2C44',
      dark: '#1B2033',
    },

    secondary: {
      main: '#036FC0',
      light: '#00B6DE',
    }
  },
};
