import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setIsDropdownShowed } from "../../redux/reducers/headerReducer";
import {
  BtnsContainer,
  Dropdown,
  NavBtn,
  NavBtnWithDropdown,
  StyledHeader,
} from "./Header.styles";

export const Header = () => {
  const dispatch = useAppDispatch();
  const isDropdownShowed = useAppSelector(
    (state) => state.header.isDropdownShowed
  );

  const handleUsernameClick = () => {
    dispatch(setIsDropdownShowed(!isDropdownShowed));
  };

  const handleClickOutside = (event: MouseEvent) => {
    const dropdown = document.getElementById("dropdown");
    const navBtnWithSubmenu = document.getElementById("navBtnWithSubmenu");
    const isClickInsideDropdown = dropdown?.contains(event.target as Node);
    const isClickInsideNavBtnWithSubmenu = navBtnWithSubmenu?.contains(
      event.target as Node
    );

    if (
      !isClickInsideDropdown &&
      !isClickInsideNavBtnWithSubmenu &&
      isDropdownShowed
    ) {
      dispatch(setIsDropdownShowed(false));
    }
  };

  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") dispatch(setIsDropdownShowed(false));
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
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
          id="navBtnWithSubmenu"
          className="active"
          onClick={handleUsernameClick}
          isDropdownShowed={isDropdownShowed}
        >
          {/* Should be displayed real username of current user */}
          Username
          <img src="src\assets\arrow-down.svg" alt="Drop down" />
          <Dropdown id="dropdown" isDropdownShowed={isDropdownShowed}>
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
