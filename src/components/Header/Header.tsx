import { useEffect, useRef, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAppSelector } from 'src/redux/hooks';

import { ReactComponent as ArrowDownIcon } from '/assets/arrow-down.svg';
import logo from '/assets/darkLogo.png';

import { Dropdown } from './Dropdown';
import {
  BtnsContainer,
  NavBtn,
  NavBtnWithDropdown,
  StyledHeader,
} from './Header.styles';

export const Header = () => {
  const user = useAppSelector((state) => state.auth.user);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const navBtnRef = useRef<HTMLButtonElement | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !navBtnRef.current?.contains(event.target as Node) &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const handleEscapeKeyDown = (event: KeyboardEvent) => {
    if (isDropdownOpen && event.key === 'Escape') setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKeyDown);
    };
  }, []);

  return (
   <>
    <StyledHeader>
      <Link to="/Catalog">
        <img src={logo} alt="Endava Logo" />
      </Link>
      <BtnsContainer data-testid="buttons-container">
        <NavBtn>
          <Link to="/Catalog" data-testid="catalog-link">
            Catalog
          </Link>
        </NavBtn>
        <NavBtnWithDropdown
          className="active"
          isDropdownShowed={isDropdownOpen}
        >
          <NavBtn ref={navBtnRef} onClick={toggleDropdown}>
            {user?.userName}
            <ArrowDownIcon />
          </NavBtn>
          {isDropdownOpen && <Dropdown dropdownRef={dropdownRef} />}
        </NavBtnWithDropdown>
      </BtnsContainer>
    </StyledHeader>
    <Outlet />
   </>
  );
};
