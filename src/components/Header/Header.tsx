import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from './Dropdown';
import {
  BtnsContainer,
  NavBtn,
  NavBtnWithDropdown,
  StyledHeader,
} from './Header.styles';

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const navBtnRef = useRef<HTMLButtonElement | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !navBtnRef.current?.contains(event.target as Node) &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      console.log(
        'inside handleOutsideClick inside condition:',
        isDropdownOpen
      );

      setIsDropdownOpen(false);
    }
  };

  const handleEscapeKeyDown = (event: KeyboardEvent) => {
    if (isDropdownOpen && event.key === 'Escape') {
      setIsDropdownOpen(false);
    }
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
    <StyledHeader>
      <Link to="/Catalog">
        <img src="src/assets/darkLogo.png" alt="Endava Logo" />
      </Link>
      <BtnsContainer>
        <NavBtn>
          <Link to="/Catalog">Catalog</Link>
        </NavBtn>
        <NavBtnWithDropdown
          className="active"
          isDropdownShowed={isDropdownOpen}
        >
          <NavBtn ref={navBtnRef} onClick={toggleDropdown}>
            {/* Should be displayed real username of current user */}
            Username
            <img src="src\assets\arrow-down.svg" alt="Drop down" />
          </NavBtn>
          {isDropdownOpen && <Dropdown dropdownRef={dropdownRef} />}
        </NavBtnWithDropdown>
      </BtnsContainer>
    </StyledHeader>
  );
};
