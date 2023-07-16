import { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './Button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  ref?: React.MutableRefObject<HTMLButtonElement | null>;
}

export const Button = ({ title, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{title}</StyledButton>;
};
