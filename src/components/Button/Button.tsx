import { StyledButton } from './Button.styles';

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  title: string;
  disabled?: boolean;
}

export const Button = ({ type, title, disabled }: ButtonProps) => {
  return (
    <StyledButton type={type} disabled={disabled}>
      {title}
    </StyledButton>
  );
};
