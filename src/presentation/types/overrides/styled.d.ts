/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { LIGHT_THEME } from '@/presentation/assets/styles/theme';

declare module 'styled-components' {
  type ThemeObj = typeof LIGHT_THEME;

  export interface DefaultTheme extends ThemeObj {}
}
