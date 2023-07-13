import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  padding-right: 100px;
  border: 1px solid black;
  background-color: #1a1a1a;

  /* logo is a bit lower than right buttons;
     to fix it, we need to set imgs position to absolute
  */
  img {
    /* top: 15px; */
    /* left: 25px; */
    width: 100px;
  }
`;

export const BtnsContainer = styled.div`
  display: flex;
`;

export const NavBtn = styled.button`
  display: flex;
  position: relative;
  margin: 0px 15px;
  margin-right: 20px;
  font-size: 14px;
  font-weight: 500;
  color: white;
  background-color: transparent;
  border: none;
  outline: none;
  text-transform: uppercase;
  text-decoration: none;
  opacity: 0.5;
  cursor: pointer;

  a {
    padding: 15px;
    color: white;
    text-decoration: none;
  }

  &:hover,
  &.active {
    opacity: 1;
  }
`;

export const NavBtnWithDropdown = styled.div<{ isDropdownShowed: boolean }>`
  svg {
    width: 20px;
    padding: 0 6px;
    transform: ${({ isDropdownShowed }) =>
      isDropdownShowed ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.2s ease-in-out;
  }
`;

export const StyledDropdown = styled.ul`
  position: absolute;
  width: 150px;
  margin: 0;
  padding: 10px 0;
  list-style: none;
  background-color: white;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 2px;

  li {
    padding: 2px 5px;
    &:last-child {
      margin-top: 8px;
      padding-top: 10px;
      border-top: 1px solid #c2c2c2;
    }
  }

  a {
    text-align: left;
    font-size: 12px;
    color: black;
    padding: 5px 30px 5px 20px;
    text-decoration: none;

    &:hover {
      font-weight: bold;
    }
  }
`;
