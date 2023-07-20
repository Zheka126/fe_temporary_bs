import { CheckboxContainer } from './Checkbox.styles';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

// or should it be more explicit with interface?
export const Checkbox = ({ name, ...restProps }: CheckboxProps) => (
  <CheckboxContainer>
    <input type="checkbox" {...restProps} />
    <label htmlFor={name}>{name}</label>
  </CheckboxContainer>
);
