import { StyledButton } from './Button.styles';

export interface IButtonProps {
  type: 'button' | 'submit' | 'reset';
  title: string;
}

export const Button = ({ type, title }: IButtonProps) => {
  return <StyledButton type={type}>{title}</StyledButton>;
};
