import styled from 'styled-components';

export const RolesPanel = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  text-transform: uppercase;
  font-weight: 600;
  padding-bottom: 20px;
  border-bottom: 2px solid black;
  padding-left: 20px;
`;

export const RequestError = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 500;
`
