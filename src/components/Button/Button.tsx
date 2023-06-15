import { ButtonType } from '../../types';
import { StyledButton } from './Button.styles';

export default function Button({ title, callback }: ButtonType) {
  return <StyledButton onClick={callback}>{title}</StyledButton>;
}
