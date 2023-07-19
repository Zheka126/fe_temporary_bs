import { RefObject } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'src/redux/hooks';

import { StyledDropdown } from './Header.styles';

interface DropdownProps {
  dropdownRef: RefObject<HTMLUListElement>;
  onOpenModal: () => void;
  closeDropdown: () => void;
}

export const Dropdown = ({
  dropdownRef,
  onOpenModal,
  closeDropdown,
}: DropdownProps) => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <StyledDropdown ref={dropdownRef}>
      <li>
        <Link to="/profile" onClick={closeDropdown}>
          My profile
        </Link>
      </li>
      {(user?.role === 'Admin' || user?.role === 'SuperAdmin') && (
        <li>
          <Link to="/admin/roles" onClick={closeDropdown}>
            Admin
          </Link>
        </li>
      )}
      <li>
        <button
          className="signOutBtn"
          type="button"
          onClick={() => {
            onOpenModal();
            closeDropdown();
          }}
        >
          Sign out
        </button>
      </li>
    </StyledDropdown>
  );
};
