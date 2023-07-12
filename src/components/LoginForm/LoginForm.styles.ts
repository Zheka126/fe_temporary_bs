import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledParagraph = styled.p`
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: gray;
  margin-top: 0;
  a {
    color: black;
    margin-left: 10px;
  }
`;

export const ForgotPasswordLink = styled(Link)`
  font-weight: 600;
  color: gray;
  margin-bottom: 25px;
  text-decoration: none;
`;
