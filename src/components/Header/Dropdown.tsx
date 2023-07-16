import { RefObject } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'src/redux/hooks';

import { StyledDropdown } from './Header.styles';

interface DropdownProps {
  dropdownRef: RefObject<HTMLUListElement>;
  onOpenModal: () => void;
}

export const Dropdown = ({
  dropdownRef,
  onOpenModal: openModal,
}: DropdownProps) => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <StyledDropdown ref={dropdownRef}>
      <li>
        <Link to="/profile">My profile</Link>
      </li>
      {(user?.role === 'Admin' || user?.role === 'SuperAdmin') && (
        <li>
          <Link to="/admin/roles">Admin</Link>
        </li>
      )}
      <li>
        <button className="signOutBtn" type="button" onClick={openModal}>
          Sign out
        </button>
      </li>
    </StyledDropdown>
  );
};
