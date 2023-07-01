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
    <StyledHeader ref={headerRef}>
      <Link to="/Catalog">
        <img src="src/assets/darkLogo.png" alt="Endava Logo" />
      </Link>
      <BtnsContainer>
        <NavBtn>
          <Link to="/Catalog">Catalog</Link>
        </NavBtn>
        <NavBtnWithDropdown
          className="active"
          onClick={toggleDropdown}
          onBlur={closeDropdown}
          isDropdownShowed={isDropdownShowed}
        >
          {/* Should be displayed real username of current user */}
          Username
          <img src="src\assets\arrow-down.svg" alt="Drop down" />
          <Dropdown isDropdownShowed={isDropdownShowed}>
            <li>
              <Link to="/Profile">My profile</Link>
            </li>
            {/* should display admin only if user has admin rights */}
            <li>
              <Link to="/Admin">Admin</Link>
            </li>
            <li>
              <Link to="/SignOut">Sign out</Link>
            </li>
          </Dropdown>
        </NavBtnWithDropdown>
      </BtnsContainer>
    </StyledHeader>
  );
};
