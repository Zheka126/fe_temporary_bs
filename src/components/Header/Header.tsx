import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BtnsContainer,
  Dropdown,
  NavBtn,
  NavBtnWithDropdown,
  StyledHeader,
} from './Header.styles';

export const Header = () => {
  const [isDropdownShowed, setIsDropdownShowed] = useState(false);
  const headerRef = useRef<HTMLHeadingElement>(null);

  const closeDropdown = () => setIsDropdownShowed(false);
  const toggleDropdown = () => setIsDropdownShowed((prev) => !prev);

  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') closeDropdown();
  };

  useEffect(() => {
    const container = headerRef.current;
    if (container) {
      container.addEventListener('keydown', handleEscapeKey);
      return () => {
        container.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, []);

  return (
    <StyledHeader ref={headerRef} data-testid="header">
      <Link to="/Catalog" data-testid="logo-link">
        <img src="src/assets/darkLogo.png" alt="Endava Logo" />
      </Link>
      <BtnsContainer data-testid="buttons-container">
        <NavBtn>
          <Link to="/Catalog" data-testid="catalog-link">
            Catalog
          </Link>
        </NavBtn>
        <NavBtnWithDropdown
          className="active"
          onClick={toggleDropdown}
          onBlur={closeDropdown}
          isDropdownShowed={isDropdownShowed}
          data-testid="dropdown-button"
        >
          {/* Should be displayed real username of current user */}
          Username
          <img src="src\assets\arrow-down.svg" alt="Drop down" />
          <Dropdown
            isDropdownShowed={isDropdownShowed}
            data-testid="dropdown-menu"
          >
            <li>
              <Link to="/Profile" data-testid="profile-link">
                My profile
              </Link>
            </li>
            {/* should display admin only if user has admin rights */}
            <li>
              <Link to="/Admin" data-testid="admin-link">
                Admin
              </Link>
            </li>
            <li>
              <Link to="/SignOut" data-testid="signout-link">
                Sign out
              </Link>
            </li>
          </Dropdown>
        </NavBtnWithDropdown>
      </BtnsContainer>
    </StyledHeader>
  );
};
