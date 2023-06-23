import { styled } from 'styled-components';

interface InputProps {
  outline?: string;
}

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 10px;
  font-size: 40px;
  font-weight: normal;
  text-align: center;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;

  margin-bottom: 25px;
`;

export const StyledInput = styled.input<InputProps>`
  width: 100%;

  padding: 15px 25px;
  outline: ${({ outline }) => outline};
  border: none;
  border-radius: 1px;

  &:hover {
    box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.08);
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.outline};
    box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.08);
  }
`;

export const StyledErrorMessage = styled.span`
  position: absolute;
  left: 0;
  bottom: -20px;
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;
