import { css, DefaultTheme } from 'styled-components';

// should it be here or at types folder?
export interface StyledTheme extends DefaultTheme {
  colors: {
    black: string;
    lightGray: string;
    gray: string;
    red: string;
    blue: string;
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
    blue: '#00aaff',
  },
  styledScrollbar: `
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f7f7f7;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #9d9d9d;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }`,

  flexStyles: (justifyContent = 'center', alignItems = 'center') => css`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `,
};
