import { styled } from 'styled-components';

export const StyledButton = styled.button`
  flex: 0.5;
  padding: 15px 0;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: #1a1a1a;
  border: none;
  outline: none;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: 3px solid #9d9d9d;
  }
`;
