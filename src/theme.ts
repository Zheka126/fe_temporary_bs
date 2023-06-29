import { css, DefaultTheme } from 'styled-components';

interface StyledTheme extends DefaultTheme {
  colors: {
    black: string;
    lightGray: string;
    outline: string;
    error: string;
    blue: string;
  };
  flexStyles: (
    justifyContent?: string,
    alignItems?: string
  ) => ReturnType<typeof css>;
}

export const theme: StyledTheme = {
  colors: {
    black: '#1a1a1a',
    lightGray: '#f7f7f7',
    outline: '#9d9d9d',
    error: '#de6b67',
    blue: '#00aaff',
  },

  flexStyles: (justifyContent = 'center', alignItems = 'center') => css`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `,
};
