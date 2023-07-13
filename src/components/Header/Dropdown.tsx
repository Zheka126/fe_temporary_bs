import { Link } from 'react-router-dom';
import { StyledDropdown } from './Header.styles';
import { RefObject } from 'react';

interface DropdownProps {
  dropdownRef: RefObject<HTMLUListElement>;
}

export const Dropdown = ({ dropdownRef }: DropdownProps) => {
  console.log('ref in dropdown component: ', dropdownRef);
  return (
    <StyledDropdown ref={dropdownRef}>
      <li>
        <Link onClick={() => console.log('My profile clicked')} to="/Profile">
          My profile
        </Link>
      </li>
      {/* should display admin only if user has admin rights */}
      <li>
        <Link to="/Admin">Admin</Link>
      </li>
      <li>
        <Link to="/SignOut">Sign out</Link>
      </li>
    </StyledDropdown>
  );
};
