import styled from 'styled-components';

export const AssignmentsPanel = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  list-style: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 13px;
  padding-bottom: 20px;
  border-bottom: 2px solid black;
  padding-left: 20px;
`;