import { CheckboxContainer } from './Checkbox.styles';

// or should it be more explicit with interface?
export const Checkbox = ({name, ...restProps}) => (
  <CheckboxContainer>
    <input type="checkbox" {...restProps} />
    <label htmlFor={name}>{name}</label>
  </CheckboxContainer>
);
