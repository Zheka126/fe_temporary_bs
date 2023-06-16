import { FC } from 'react';
import { StyledButton } from './Button.styles';
import { memo } from 'react';

export interface IButtonProps {
  type: 'button' | 'submit' | 'reset';
  title: string;
  // callback: () => void;
}

export const Button: FC<IButtonProps> = memo(({ type, title }) => {
  return <StyledButton type={type}>{title}</StyledButton>;
});
