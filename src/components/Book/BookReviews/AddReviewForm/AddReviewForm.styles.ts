import { StyledInput } from 'src/components/common/Input.styles';
import { styled } from 'styled-components';

export const FormTitle = styled.h2`
  margin-top: 0;
  font-weight: 400;
`;

export const StyledInputArea = styled(StyledInput).attrs({ as: 'textarea' })`
  min-height: 150px;
`;
