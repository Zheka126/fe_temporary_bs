import { StyledButton } from './Button.styles';

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  title: string;
}

export const Button = ({ type, title }: ButtonProps) => {
  return <StyledButton type={type}>{title}</StyledButton>;
};
