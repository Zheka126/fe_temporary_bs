import { css, DefaultTheme } from 'styled-components';

// should it be here or at types folder?
interface StyledTheme extends DefaultTheme {
  colors: {
    black: string;
    lightGray: string;
    gray: string;
    red: string;
  };
  flexStyles: (
    justifyContent?: string,
    alignItems?: string
  ) => ReturnType<typeof css>;
}

// how to make TS compiler to hint me what colors I can use when i'm writing theme.colors...
export const theme: StyledTheme = {
  colors: {
    black: '#1a1a1a',
    lightGray: '#f7f7f7',
    gray: '#9d9d9d',
    red: '#de6b67',
  },

  flexStyles: (justifyContent = 'center', alignItems = 'center') => css`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `,
};
