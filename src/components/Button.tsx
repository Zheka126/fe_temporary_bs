import { styled } from 'styled-components';

type ButtonType = {
  type: string;
  title: string;
  callback: () => void;
};

const StyledButton = styled.button`
  flex: 0.5;
  padding: 15px 0;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: #161616;
  border: none;
  outline: none;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: 4px solid #9d9d9d;
  }
`;

export default function Button({ title, callback }: ButtonType) {
  return <StyledButton onClick={callback}>{title}</StyledButton>;
}
