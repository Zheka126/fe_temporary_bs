import { RefObject } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'src/redux/hooks';

import { StyledDropdown } from './Header.styles';

interface DropdownProps {
  dropdownRef: RefObject<HTMLUListElement>;
}

export const Dropdown = ({ dropdownRef }: DropdownProps) => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <StyledDropdown ref={dropdownRef}>
      <li>
        <Link onClick={() => console.log('My profile clicked')} to="/Profile">
          My profile
        </Link>
      </li>
      {user?.role === 'admin' && (
        <li>
          <Link to="/Admin">Admin</Link>
        </li>
      )}
      <li>
        <Link to="/SignOut">Sign out</Link>
      </li>
    </StyledDropdown>
  );
};
