import { css, DefaultTheme } from 'styled-components';

export interface StyledTheme extends DefaultTheme {
  colors: {
    gray: string;
    black: string;
  };
  flexStyles: (
    justifyContent?: string,
    alignItems?: string
  ) => ReturnType<typeof css>;
}
