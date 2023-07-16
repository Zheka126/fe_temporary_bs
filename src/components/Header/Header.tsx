import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { setUser } from 'src/redux/slices/authSlice';

import { ReactComponent as ArrowDownIcon } from '/assets/arrow-down.svg';
import logo from '/assets/darkLogo.png';

import { Modal } from '..';
import { Dropdown } from './Dropdown';
import {
  BtnsContainer,
  NavBtn,
  NavBtnWithDropdown,
  StyledHeader,
} from './Header.styles';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const signOut = () => {
    localStorage.removeItem('token');
    dispatch(setUser(null));
    navigate('/login');
    setIsModalOpen(false);
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
      <StyledHeader data-testid="header">
        <Link to="/Catalog" data-testid="logo-link">
          <img src={logo} alt="Endava Logo" />
        </Link>
        <BtnsContainer data-testid="buttons-container">
          <NavBtn>
            <Link to="/main" data-testid="catalog-link">
              Catalog
            </Link>
          </NavBtn>
          <NavBtnWithDropdown
            className="active"
            isDropdownShowed={isDropdownOpen}
            data-testid="dropdown-button"
          >
            <NavBtn
              ref={navBtnRef}
              onClick={toggleDropdown}
              data-testid="nav-button-toggle"
            >
              {user?.userName}
              <ArrowDownIcon />
            </NavBtn>
            {isDropdownOpen && (
              <Dropdown
                dropdownRef={dropdownRef}
                onOpenModal={() => setIsModalOpen(true)}
                data-testid="dropdown"
              />
            )}
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Are you sure you want to sign out?"
              onConfirm={signOut}
            />
          </NavBtnWithDropdown>
        </BtnsContainer>
      </StyledHeader>
      <Outlet />
    </>
  );
};
