import { styled } from 'styled-components';

type ButtonType = {
  type: string;
  title: string;
  callback: () => void;
};

const StyledButton = styled.button`
  flex: 0.5;
  padding: 10px 0;
  color: #fff;
  background-color: #161616;
  border: none;
  outline: none;
  text-transform: uppercase;
  border-radius: 3px;
`;

export default function Button({ title, callback }: ButtonType) {
  return <StyledButton onClick={callback}>{title}</StyledButton>;
}
