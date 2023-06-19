import { memo } from 'react';

import { StyledButton } from './Button.styles';

export interface IButtonProps {
  type: 'button' | 'submit' | 'reset';
  title: string;
  // callback: () => void;
}

export const Button = memo(({ type, title }: IButtonProps) => {
  return <StyledButton type={type}>{title}</StyledButton>;
});
